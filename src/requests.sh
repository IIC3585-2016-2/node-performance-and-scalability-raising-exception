for i in `seq 1 250`;
do
	echo "REQUEST $i"
	curl localhost:3000 > /dev/null &
done
