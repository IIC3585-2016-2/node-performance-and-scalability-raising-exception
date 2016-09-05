# node-performance-and-scalability-raising-exception
Información sobre la performance y escalamiento de Node que lo diferencia de otras tecnologías.

## Instalemos el ejemplo
```bash
cd src
npm install
# Si queremos correr la aplicación tal como la programamos
# npm start

```
## Usemos un process management como PM2
```bash
npm install pm2 -g

pm2 start <program> --name=<NAME> -i <instances>

pm2 start app.js --name=API -i 4  # En particular
pm2 monit                         # Para iniciar el monitoreo



## NPM FORM
pm2 start npm --name=API -i -- start # Funciona para npm

```
## En otro terminal

```bash
src/request.sh
# el signo '&' hace que curl corra como un proceso en
# background, y poderlas trabajarlas de forma "asincrona"
for i in `seq 1 250`;
do
	echo "REQUEST $i"
	curl localhost:3000 > /dev/null &
done

```

```bash
./requests

```


# Referencias
Links de fuentes utilizadas investigando del tema y de interes para aventurarse aún más.
* [PM2 production process manager for Node.js](https://github.com/Unitech/pm2)
