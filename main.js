
let res = document.getElementById('res')
let pessoas =['samuel','mateus','raquel','joao','maria',
  'rita','rayane','almeida','eneas','carlos',
  'elizabete','midia','miria','sueli','jesus','felipe',
  'jose'
]



function recebe(){
  let galeria = document.getElementById('galeria')
  let img = document.createElement('img')
  let nome = document.getElementById('nome').value
  let cpf = document.getElementById('cpf')
  let c = Number(cpf.value)

  galeria.append(img)
  if(c === senha()){
    if(pessoas.includes(nome.toLowerCase())){
      res.innerHTML = ` ${nome} voce esta na lista [seja bom vindo ] 😁`
      res.style.background = '#5CFAEA'
      res.style.color = '#000'
    }
    else{
      res.innerHTML = 'seu nome não esta na lista 😢'
      res.style.background ='red'
    }
  }
  else{
    res.innerHTML= 'senha incorreta 🤐'
    res.style.background ='red'
  }
  
}

function senha(){
  return 123
}
