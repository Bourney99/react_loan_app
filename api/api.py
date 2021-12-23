import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# borrowers = {'borrowers': []}
borrowers = []
id=1
# {'name':'Mal21 Pty Ltd', 'address': '51 Finlayson St', 'phone': '0424730927'},{'name': 'MAB pty ltd', 'address': ''}, {'name': 'NAB pty ltd', 'address': ''}, {'name': 'GB pty ltd', 'address': ''}



@app.route('/time')
def get_current_time():
    # return {'time': time.time()}

    return {'borrowers':borrowers}


@app.route('/result', methods=['POST'])
def result():
    global id
    borrower_name = request.json[0]
    address = request.json[1]
    phone = request.json[2]


    borrowerFound = False
    for borrower in borrowers:
        if borrower['name'] == borrower_name:
            borrowerFound = True
            borrower['address'] = address
            borrower['phone'] = phone


    if not borrowerFound:
        borrowers.append({'id':id, 'name': borrower_name, 'address': address, 'phone': phone})
        id+=1

    print(borrowers)
    return "No player information is given"


@app.route('/search_result', methods=['POST'])
def search_result():
    borrower_name = request.json
    print(borrower_name)

    for borrower in borrowers:#['borrowers']:
        if borrower['name'] == borrower_name:
            return {'id': borrower['id'], 'name': borrower_name, 'address': borrower['address'], 'phone': borrower['phone']}
        else:
            return None
    #return "No borrower with that name"


if __name__ == '__main__':
    app.run()
