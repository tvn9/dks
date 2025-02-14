# Running Python App in Container 

Create a python app that return a random number between min and max input integer 

### Build image with docker file 

```Dockerfile 
FROM python

WORKDIR /usr/app 

COPY . ./ 

CMD ["python", "rng.py"]

```

### Python app 

```py 
from random import randint 

min_number = int(input("Please enter the min number: "))
max_number = int(input("Please enter the max number: "))

if (max_number < min_number):
   print("Invalid input - shutting down...")
else:
   rnd_number = randint(min_number, max_number)
   print(rnd_number) 
``` 

### Build and run commands 

```
docker build -t minmaxpy . 
```

### Start container and run app 

``` 
docker run -it <image ID> 
docker start -a -i <container ID>
```
