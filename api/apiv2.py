import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# borrowers = {'borrowers': []}
borrowers = [{'id':'','name': '', 'address': '', 'phone':''}]
borrower_id = 1


# {'name':'Mal21 Pty Ltd', 'address': '51 Finlayson St', 'phone': '0424730927'},{'name': 'MAB pty ltd', 'address': ''}, {'name': 'NAB pty ltd', 'address': ''}, {'name': 'GB pty ltd', 'address': ''}


@app.route('/borrower_list')
def get_borrower_list():
    # return {'time': time.time()}
    return {'borrowers': borrowers}


@app.route('/new_borrower', methods=['POST'])
def new_borrower():
    global borrower_id
    new_borrower_name = request.json[0]
    address = request.json[1]
    phone = request.json[2]
    existing_borrower = False

    for borrower in borrowers:
        if borrower['name'] == new_borrower_name:
            existing_borrower = True
            print('borrower with this name already exists')
            return 'borrower with this name already exists'

    if not existing_borrower:
        borrowers.append({'id': borrower_id, 'name': new_borrower_name, 'address': address, 'phone': phone})
        borrower_id += 1
        print(borrowers)
        return 'Borrower saved '


@app.route('/result', methods=['POST'])
def result():

    borrower_id = request.json[0]
    borrower_name = request.json[1]
    borrower_address = request.json[2]
    borrower_phone = request.json[3]

    for borrower in borrowers:  # ['borrowers']:
        if borrower['id'] == borrower_id:
            borrower['name'] = borrower_name
            borrower['address'] = borrower_address
            borrower['phone'] = borrower_phone

            return {'id': borrower['id'], 'name': borrower['name'], 'address': borrower['address'],
                    'phone': borrower['phone']}

    return 'Done'

if __name__ == '__main__':
    app.run()
    print('hello world')
    print('hello world again!!!')
