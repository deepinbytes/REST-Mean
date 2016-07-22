# Vault Dragon Challenge

API Deployed on Heroku
https://vault-dragon-challenge.herokuapp.com/

Endpoints:

Fetch All Objects : https://vault-dragon-challenge.herokuapp.com/object

Method: GET

Find Value by Key: https://vault-dragon-challenge.herokuapp.com/object/{key}

Method: GET

Find Value by Timestamp: https://vault-dragon-challenge.herokuapp.com/object/{key}?timestamp="..."

Method: GET

Add/Update:
https://vault-dragon-challenge.herokuapp.com/object/{key}

Method: POST
Body: JSON: {val: value}

Curl example for add/update in windows:

curl -i -X POST -H "Content-Type: application/json" -d "{\"val\": \"testing\"}" https://vault-dragon-challenge.herokuapp.com/object/Eric
