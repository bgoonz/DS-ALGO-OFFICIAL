#!/usr/bin/env python3

import os
import sys
import json
import hashlib
import requests

from subprocess import call
from concurrent.futures import ThreadPoolExecutor as PoolExecutor


def download_all_from_user(user: str):

    next_page = True
    page = 1

    while next_page:

        url = f"https://api.github.com/users/{user}/gists?page={page}"

        response = requests.get(url)

        if not len(response.json()):
            next_page = False
        else:
            page += 1

        download_all(response.json())


def download_all(gists: list):
    with PoolExecutor(max_workers=10) as executor:
        for _ in executor.map(download, gists):
            pass


def download(gist):

    target = gist["id"] + hashlib.md5(gist["updated_at"].encode("utf-8")).hexdigest()

    call(["git", "clone", gist["git_pull_url"], target])

    description_file = os.path.join(target, "description.txt")

    with open(description_file, "w") as f:
        f.write(f"{gist['description']}\n")


# Run

user = sys.argv[1]

download_all_from_user(user)
