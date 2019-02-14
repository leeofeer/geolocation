<?php
class Database
{
	
	function __construct()
	{
		self::getConn();
	}

	public function getConn(){
		$conn = new PDO('mysql:host=localhost; dbname=geolocalizar',"root","");
		return $conn;
	}

	public function query($sql){
		$query = self::getConn();
		$result = $query->query($sql);
		return $result;

	}
}