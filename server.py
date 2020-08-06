import json
import os
import requests


def _make_post_call(body):
    url = "https://api.test.paysafe.com/paymenthub/v1/payments"
    headers = {
        "Content-Type": "application/json",
        'Simulator': "INTERNAL",
        'Authorization': '''Basic cHJpdmF0ZS03NzUxOkItcWEyLTAtNWYwMzFjZGQtMC0zMDJ
                                kMDIxNDQ5NmJlODQ3MzJhMDFmNjkwMjY4ZDNiOGViNzJlNWI4Y2N
                                mOTRlMjIwMjE1MDA4NTkxMzExN2YyZTFhODUzMTUwNWVlOGNjZmM4
                                ZTk4ZGYzY2YxNzQ4''',
    }
    response = requests.post(url, json=body, headers=headers, timeout=10)
    return response.json()


def main(event, context):
    print(event)
    body = event['body']
    print('data is :', body)

    response = _make_post_call(body)
    print('##########################3333')
    print(response)
    return {
        'statusCode': 200,
        'headers': {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(response)
    }
