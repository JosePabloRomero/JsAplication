function calcular()
{
  var numero1=document.getElementById("numero1").value;
  var numero2=document.getElementById("numero2").value;
  var contador=0;
  var promedio=0;
  var nDivisores=0;
  var cantidad=0;
  var divisores=0;
  var numeros= "";

  if (numero1 < numero2)
  {

    numero1 = numero1 + 1;
    numero2 = numero2 - 1;

    for (var i = numero1; i <= numero2; i++)
    {
      for (var k = 1; k <= i; i++)
      {
        if ((i % k) == 0)
        {
          contador = contador + 1;
        }
      }

      if (contador > 10)
      {
        divisores = document.getElementById("numeros").value;
        numeros = (divisores+" "+i);
        promedio = promedio + i;
        nDivisores = nDivisores + 1;
        contador = 0;
      }
      contador = 0;
    }
  }
  else
  {
    alert("El primer numero debe de ser menor que el segundo");
  }


  if (nDivisores !== 0)
  {

    //promedio = (promedio / nDivisores);
    document.write("Cantidad: "+cantidad+" | Promedio: "+promedio+" | Numeros: "+numeros);
    //document.getElementById("promedio").value = (promedio);
    //document.getElementById("cantidad").value = (cantidad;
  }


}
