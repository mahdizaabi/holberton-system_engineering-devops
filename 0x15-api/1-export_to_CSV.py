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
    user = requests.get("https://jsonplaceholder.typicode.com/users/{}".
                        format(userId)).json()
    tsks = requests.get("https://jsonplaceholder.typicode.com/todos?userId={}".
                        format(userId)).json()
    with open("{}.csv".format(userId), 'w', newline='') as csvfile:
        taskwriter = csv.writer(csvfile, quoting=csv.QUOTE_ALL)
        for task in tsks:
            taskwriter.writerow([int(userId), user.get('username'),
                                 task.get('completed'),
                                 task.get('title')])
