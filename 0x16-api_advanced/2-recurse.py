#!/usr/bin/python3
"""
Contains the top_ten function
"""

import requests


def recurse(subreddit, hot_list=[], after_party=None):
    header = {'User-Agent': 'fake'}
    param = {'after': after_party}
    r = requests.get('http://www.reddit.com/r/{}/hot.json'.format(subreddit),
                     headers=header,
                     params=param)   
    status = r.status_code
    if status == requests.codes.ok:
        print('f')
        x = r.json().get('data').get('children')
        for page in x:
            hot_list.append(page.get('data').get('title'))
        if len(hot_list) == 0:
            return None
        after_paty = r.json().get('data').get('after')
        if after_party is None:
            print('from after')
            return hot_list
        print('ccc')
        return recurse(subreddit, hot_list, after_party)
    else:
        return None
