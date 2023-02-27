# Important aspects of the API

## Parameters Table

`sql
SELECT *
FROM ABI_DB.ABI.APPLICATION_PARAMETER  pa with(nolock) where PARAMETER_ID in (353,351,350,349)
`

| Id  | Parameter ID                  | Obs                                                       |
|-----|-------------------------------|-----------------------------------------------------------|
| 329 | VAIX_ENABLED                  | ENABLES OR DISABLES THE ENDPOINT TO HAVE CONTROL OF SENDS |
| 350 | VAIX_NUMBER_OF_ROWS_TO_RETURN | Authorized Default Rows bath_size                         |
| 351 | VAIX_CONN_STRING_NAME         | Conn String Name of Replica                               |
| 353 | VAIX_MAX_DAYS_TO_SEND         | MAX NUMBER DAYS TO SEND DIFF TODAY (timestamp)            |

## Detail of Parameters

`sql
SELECT * 
FROM ABI_DB.ABI.APPLICATION_PARAMETERS PS WITH(NOLOCK) 
WHERE APPLICATION_ID = 83
`

## Paremeters Avoid CORS
This is the URL for the VAIX API MARKETN EVENT INFO ENDPOINT
To carry out the tests of this, you must enter from Betting Site and apply the following script in javascript from the chrome console.
`javascript
fetch('/Integrations/Vaix/MarketEventInfo?page=0&event_ids=4459719|4459718').then(r=>r.json()).then(r => console.log(r))
`

You should also make sure that the "INTEGRATION_VAIX_MARKET_EVENT_API_URL" parameter is well configured.

`sql
SELECT * 
FROM ABI_DB.abi.APPLICATION_PARAMETER a WITH(NOLOCK)
INNER JOIN ABI_DB.ABI.APPLICATION_PARAMETERS B WITH(NOLOCK) ON A.PARAMETER_ID = B.PARAMETER_ID
WHERE a.PARAMETER_ID = 367
`

| PARAMETER_ID | NAME                                  | DESCRIPTION                                                  | APPLICATION_ID |PARAMETER_ID | VALUE                                    |
|--------------|---------------------------------------|--------------------------------------------------------------|----------------|-------------|------------------------------------------|
|367           |INTEGRATION_VAIX_MARKET_EVENT_API_URL  |This is the URL for the VAIX API MARKETN EVENT INFO ENDPOINT  |2               |367          |http://DEVLAB04:4988/api/MarketEventInfo  |

## Rules

1. VAIX_ENABLED: This helps us disable the API (Disabled or Enabled).
1. VAIX_NUMBER_OF_ROWS_TO_RETURN: This parameter is to define a maximum limit of records to return.
1. VAIX_MAX_DAYS_TO_SEND: This is the maximum number of days allowed to return the data.

## Response Type

* 404 Not Found
`json
	{
	  "Status": false,
	  "StatusCode": 404,
	  "StatusMessage": "No records found",
	  "Value": null
	}
`