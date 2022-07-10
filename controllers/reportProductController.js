const { store_area, store_account, product_brand, product, report_product, store } = require('../models');
const db = require('../models');
const { getAll } = require('../queries/reportProduct');

class ReportProductController {
    static async getAllReport(req, res, next) {
        try {
            let search = []
            let { cities, startDate, endDate } = req.query
            if (!cities) {
                cities = []
            } else {
                cities = cities.split(',')
                cities.forEach(city => {
                    search.push(city)
                });
            }

            if (startDate && endDate) {
                let epochStart = new Date(startDate).getTime()
                let epochEnd = new Date(endDate).getTime()

                if (epochEnd - epochStart < 0) {
                    throw ({
                        name: 'BadRequest',
                        message: 'End date must be latest than start date'
                    })
                }
            }

            if (startDate && !isNaN(new Date(startDate).getTime())) {
                search.push(startDate)
            }

            if (endDate && !isNaN(new Date(endDate).getTime())) {
                search.push(endDate)
            }
            
            let query = getAll(cities, startDate, endDate)
            const result = await db.sequelize.query(query, {
                type: db.sequelize.QueryTypes.SELECT,
                replacements: search
            })

            if (result.length === 0) {
                throw ({
                    name: 'NotFound',
                    message: 'Data you are searching is not found'
                })
            }

            let globalReports = result.map(el => {
                return {
                    percentage: +((el.rt_comp + el.sk_comp) / el.n_comp * 100).toFixed(1),
                    area: el.area_name
                }
            })

            let brandReports = result.map(el => {
                return {
                    rotiTawarPercentage: +((el.rt_comp) / (el.rt_comp + el.rt_ncomp) * 100).toFixed(1),
                    susuKalengPercentage: +((el.sk_comp) / (el.sk_comp + el.sk_ncomp) * 100).toFixed(1),
                    area: el.area_name
                }
            })

            res.status(200).json({ globalReports, brandReports })
        } catch (err) { next(err) }
    }
}

module.exports = ReportProductController
