"""Rename."""


import os


ignore_list = [".python-version", ".DS_Store", "rename.py"]


def rename(name):
    after_name = name.replace(".png", "_sentence.png")
    print("mv {0} {1}".format(name, after_name))
    os.system("mv {0} {1}".format(name, after_name))

files = os.listdir(".")
[rename(tmp_file) for tmp_file in files if tmp_file not in ignore_list]