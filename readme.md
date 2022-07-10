# Backend Developer - Pitjarus

This app has : 

* GET and process the data provided by the database according to the user's wishes.
* JSON formatted response.

Note :
* Databases table name and column id (ex. product_id) has been changed due to convention used in ORM sequelize on nodejs.

Example:
1. Table name, 'product' ==> 'products'
2. Column id, 'product_id' ==> 'id'

&nbsp;

## Endpoints

### GET /report-products

> Get report products categorized by province

_Query Params_

```JSON
no query
```

_Request Header_

```JSON
not needed
```

_Request Body_

```JSON
not needed
```

_Response (200 OK)_

```JSON
{
    "globalReports": [
        {
            "percentage": 55,
            "area": "DKI jakarta"
        },
        {
            "percentage": 53.3,
            "area": "Jawa Barat"
        },
        {
            "percentage": 43.3,
            "area": "Kalimantan"
        },
        {
            "percentage": 46.7,
            "area": "Jawa Tengah"
        },
        {
            "percentage": 45,
            "area": "Bali"
        }
    ],
    "brandReports": [
        {
            "rotiTawarPercentage": 63.3,
            "susuKalengPercentage": 46.7,
            "area": "DKI jakarta"
        },
        {
            "rotiTawarPercentage": 56.7,
            "susuKalengPercentage": 50,
            "area": "Jawa Barat"
        },
        {
            "rotiTawarPercentage": 43.3,
            "susuKalengPercentage": 43.3,
            "area": "Kalimantan"
        },
        {
            "rotiTawarPercentage": 43.3,
            "susuKalengPercentage": 50,
            "area": "Jawa Tengah"
        },
        {
            "rotiTawarPercentage": 46.7,
            "susuKalengPercentage": 43.3,
            "area": "Bali"
        }
    ]
}
```

### GET /report-products?cities=dki jakarta,kalimantan

> Get report products from DKI Jakarta and Kalimantan

_Query Params_

```JSON
{
    "cities": "dki jakarta,kalimantan"
}
```

_Response (200 OK)_

```JSON
{
    "globalReports": [
        {
            "percentage": 55,
            "area": "DKI jakarta"
        },
        {
            "percentage": 43.3,
            "area": "Kalimantan"
        }
    ],
    "brandReports": [
        {
            "rotiTawarPercentage": 63.3,
            "susuKalengPercentage": 46.7,
            "area": "DKI jakarta"
        },
        {
            "rotiTawarPercentage": 43.3,
            "susuKalengPercentage": 43.3,
            "area": "Kalimantan"
        }
    ]
}
```

_Response (404 - Not Found)_
```JSON
{
    "message": [
        "Data you are searching is not found"
    ]
}
```

### GET /report-products?startDate=2021-01-01&endDate=2021-01-03

> Get report products categorized by province on requested range of time inclusively

_Query Params_

```JSON
{
    "startDate": "2021-01-01",
    "endDate": "2021-01-03"
}
```

_Response (200 OK)_

```JSON
{
    "globalReports": [
        {
            "percentage": 47.2,
            "area": "DKI jakarta"
        },
        {
            "percentage": 61.1,
            "area": "Jawa Barat"
        },
        {
            "percentage": 38.9,
            "area": "Kalimantan"
        },
        {
            "percentage": 36.1,
            "area": "Jawa Tengah"
        },
        {
            "percentage": 44.4,
            "area": "Bali"
        }
    ],
    "brandReports": [
        {
            "rotiTawarPercentage": 50,
            "susuKalengPercentage": 44.4,
            "area": "DKI jakarta"
        },
        {
            "rotiTawarPercentage": 61.1,
            "susuKalengPercentage": 61.1,
            "area": "Jawa Barat"
        },
        {
            "rotiTawarPercentage": 44.4,
            "susuKalengPercentage": 33.3,
            "area": "Kalimantan"
        },
        {
            "rotiTawarPercentage": 33.3,
            "susuKalengPercentage": 38.9,
            "area": "Jawa Tengah"
        },
        {
            "rotiTawarPercentage": 44.4,
            "susuKalengPercentage": 44.4,
            "area": "Bali"
        }
    ]
}
```

_Response (400 - Bad Request)_
```JSON
{
    "message": [
        "End date must be latest than start date"
    ]
}
```

_Response (404 - Not Found)_
```JSON
{
    "message": [
        "Data you are searching is not found"
    ]
}
```

### GET /report-products?cities=dki jakarta,kalimantan&startDate=2021-01-01&endDate=2021-01-03

> Get report products with combined query params

_Query Params_

```JSON
{
    "cities": "dki jakarta,kalimantan",
    "startDate": "2021-01-01",
    "endDate": "2021-01-03"
}
```

_Response (200 OK)_

```JSON
{
    "globalReports": [
        {
            "percentage": 47.2,
            "area": "DKI jakarta"
        },
        {
            "percentage": 38.9,
            "area": "Kalimantan"
        }
    ],
    "brandReports": [
        {
            "rotiTawarPercentage": 50,
            "susuKalengPercentage": 44.4,
            "area": "DKI jakarta"
        },
        {
            "rotiTawarPercentage": 44.4,
            "susuKalengPercentage": 33.3,
            "area": "Kalimantan"
        }
    ]
}
```

_Response (400 - Bad Request)_
```JSON
{
    "message": [
        "End date must be latest than start date"
    ]
}
```

_Response (404 - Not Found)_
```JSON
{
    "message": [
        "Data you are searching is not found"
    ]
}
```
