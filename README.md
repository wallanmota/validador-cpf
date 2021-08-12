# Validador de CPF

Projeto desenvolvido no curso Full Stack da Gama Academy
  - Módulo Java Scrip básico.
#

### Passos para validar CPF
  - Calcular o primeiro dígito verificador utilizando os 9 primeiros dígitos do CPF;
  - Calcular o segundo dígito verificador utilizando os 9 primeiros dígitos e o primeiro dígito verificador;
  - Verificar se os 2 dígitos encontrados são iguais aos 2 últimos dígitos do CPF;
  - Se os dígitos calculados forem iguais aos dígitos fornecidos, então o CPF é válido;

#

### Como calcular os dígitos verificadores
Os dígitos verificadores de um CPF válido são calculados da seguinte forma:

  1. A partir dos 9 primeiros dígitos do CPF, multiplica-se cada dígito por um número, começando por 1 e incrementando para cada dígito. Para o CPF 123.456.789-09, ficaria assim:
  ![]{}
