
const getAll = (areas = [], startDate = '', endDate = '') => {
    let search = ''
    let query = `
    SELECT 
        COUNT(rp.compliance) AS n_comp, 
        COUNT(IF (rp.compliance = 1 AND pb.brand_name = 'ROTI TAWAR', 1, null)) AS rt_comp, 
        COUNT(IF (rp.compliance = 0 AND pb.brand_name = 'ROTI TAWAR', 1, null)) AS rt_ncomp, 
        COUNT(IF (rp.compliance = 1 AND pb.brand_name = 'SUSU KALENG', 1, null)) AS sk_comp, 
        COUNT(IF (rp.compliance = 0 AND pb.brand_name = 'SUSU KALENG', 1, null)) AS sk_ncomp, 
        sa.area_name 
    FROM ((((store_areas sa
    INNER JOIN stores s ON sa.id = s.area_id)
    INNER JOIN report_products rp ON s.id = rp.store_id)
    INNER JOIN products p ON rp.product_id = p.id)
    INNER JOIN product_brands pb ON p.brand_id = pb.id)`

    if (areas.length === 0 && !startDate && !endDate) {
        query += " GROUP BY sa.area_name;"
        return query
    }

    if (areas.length > 0) {
        if (!search) {
            search += ' where '
        }
        search += 'sa.area_name in ('
        areas.forEach((_, i) => {
            if (i === areas.length -1) {
                search += '?'
            } else {
                search += '?,'
            }
        })
        search += ') '
    }

    if (startDate && !isNaN(new Date(startDate).getTime())) {
        if (!search) {
            search += ' where '
        } else {
            search += ' AND '
        }

        search += ' rp.tanggal >= ? '
    }

    if (endDate && !isNaN(new Date(endDate).getTime())) {
        if (!search) {
            search += ' where '
        } else {
            search += ' AND '
        }

        search += ' rp.tanggal <= ? '
    }

    query += search
    query += " GROUP BY sa.area_name;"
    return query
}

module.exports = { getAll }