import os
import sys

base = '\033[0m'
error = '\033[37m\033[41m'
italic = '\033[3m'

if len(sys.argv) != 2:
    print(
        f'{error}Error:' +
        f'{base} Invalid number of arguments'
        f'{italic}\nUse python3 git_workflow.py <Your git feature branch>'
        f'{base}\n'
    )
    sys.exit()

branch = sys.argv[1]

try:
    os.system('git checkout main')
    os.system('git pull')
    os.system(f'git checkout {branch}')
    os.system('git merge main')
except Exception:
    print(
        f'{error}Error\n' +
        f'{base}{Exception}')
