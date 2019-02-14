function guardarU(){
        	var lat = document.getElementById('latitud').value;
        	var lng = document.getElementById('longitud').value;
        	var negocio = document.getElementById('negocio').value;
			
			$.ajax({
				url: "./php/ubicacion.php?accion=insertar",
				method: "post",
				data: {negocio:negocio,latitud:lat,longitud:lng},
				success: function(data){
					console.log(data);

					if(data=="done"){
						cargarTabla()
					}
				}
				
			});
        	//alert("Guardar en BD? neg:"+negocio+" lat:"+lat+" lng: "+lng);
  }
  
  function cargarTabla(){
	  $.ajax({
				url: "./php/ubicacion.php?accion=cargar",
				dataType:"json",
				success: function(data){
					var tabla = $("#ubicaciones");
					tabla.find("tbody tr").remove();
					$.each(data, function(i,v){
						var fila = "<tr>"+"<td>";
						fila += v.id +"</td>";
						fila += "<td>"+v.negocio +"</td>";
						fila += "<td>"+v.latitud +"</td>";
						fila += "<td>"+v.longitud +"</td>";
						fila += "<td>"+"<button class='btn btn-sm btn-success' onclick='ver("+v.id+")'>Ver</button>" +"</td>";
						fila += "/<tr>";
						
						tabla.find("tbody").append(fila);
						
					});
				}
				
			});
	  
  }
  
  function ver(id){
	  //$('#mapa_modal').modal('show');
	  
	  $("#premap").find("div").remove();
	  $("#premap").append("<div id='map'></div>");
	  
	  
	  $.ajax({
		  url: "./php/ubicacion.php?accion=recuperar&id="+id,
		  dataType:"json",
	  success: function(data){
		  var latitud = data[0].latitud;
		  var longitud = data[0].longitud;
		  console.log(latitud+" "+longitud);
		  
		  mostrarMapa(latitud,longitud);
	  }
	  })
  }