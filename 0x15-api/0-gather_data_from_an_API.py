#!/usr/bin/python3
"""
Retrieve the user and the corresponding done tasks
"""

import requests
from sys import argv

if __name__ == '__main__':
    userId = argv[1]
    user = requests.get("https://jsonplaceholder.typicode.com/users/{}".
                        format(userId)).json()
    todo = requests.get("https://jsonplaceholder.typicode.com/todos?userId={}".
                        format(userId)).json()
    task_titel = []
    for task in todo:
        if task.get('completed') is True:
            task_titel.append(task.get('title'))
    print("Employee {} is done with tasks({}/{}):".
          format(user.get('name'), len(task_titel), len(todo)))
    for i in task_titel:
        print("\t {}".format(i))
