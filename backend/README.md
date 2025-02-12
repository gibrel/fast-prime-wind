## Develop

### Build virtual enviroment

```shell
python -m venv venv
source venv/bin/activate
```

### Install required libs

```shell
pip install fastapi uvicorn
```

### Generate correct requirements.txt

```shell
pip install pipreqs pip-tools
pipreqs --savepath=requirements.in && pip-compile
```

- _uvicorn_ seems to be left off for some reason

## Install

```shell
pip install -r ./requirements.txt
```

## Run

```shell
uvicorn min:app --reload
```
