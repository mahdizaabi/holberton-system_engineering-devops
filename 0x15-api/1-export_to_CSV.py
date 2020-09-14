#!/usr/bin/python3
"""
Retrieve the user and the corresponding done tasks
"""

import requests
from sys import argv
import csv

if __name__ == '__main__':
    userId = argv[1]
    task_titel = []
    data = ''
    user = requests.get("https://jsonplaceholder.typicode.com/users/{}".
                        format(userId)).json()
    tsks = requests.get("https://jsonplaceholder.typicode.com/todos?userId={}".
                        format(userId)).json()

    lcsv = []
    for i in tsks:
        lcsv.append([userId, user.get('username'), i['completed'], i['title']])
    myFile = open('{}.csv'.format(userId), 'w')
    with myFile:
        writer = csv.writer(myFile)
        writer.writerows(lcsv)
