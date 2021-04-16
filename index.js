const Discord = require('discord.js')
const Canvas = require('canvas')
const { loadImage, createCanvas } = require("canvas")

const client = new Discord.Client()

var p1 = {
	nome: '',
	numeros: '',
	pos: ''
};

var p2 = {
	nome: '',
	numeros: '',
	pos: ''
}

var cards = {
	nomes: ['gabura', 'morpheus', 'simon', 'sunny', 'valdo'],
	numeros: ['4783', '5684', '3188', '4783', '3487']
};

var cont = 0

var temp = ''

var texto = ''

var canvas = Canvas.createCanvas(800, 800)
var ctx = canvas.getContext('2d')
var attachment
var mesa =
[
	['', '', ''],
	['', '', ''],
	['', '', '']
];

client.on("ready", () => {
	console.log("Tudo pronto!")
})



client.on("message", function(message) {
	if (message.content == '!tt') {
		loadImage('./imagens/board.jpg').then((imagem) => {
			ctx.drawImage(imagem, 0, 0, canvas.width, canvas.height)
			attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
			message.channel.send("Tabuleiro limpo!", attachment)
			
		})
		mesa =
		[
			['', '', ''],
			['', '', ''],
			['', '', '']
		];


	}
	if (message.content.startsWith('!p1')) {
		p1.nome = ''
		p1.numeros = ''
		p1.pos = ''
		texto = message.content
		//verifica se a carta usada consta no BD
		for (cont = 0; cont < 5; cont++) {
			if (texto.includes(cards.nomes[cont]) == true) {
				//buffer para o jogador ativo caso a carta constar no BD
				p1.nome = cards.nomes[cont]
				p1.numeros = cards.numeros[cont]
				p1.pos = cont 
			}
		}
		
		if (p1.nome != '') {
			texto = texto.slice(-3)
			switch (texto) {
				case '1:1':
					if (mesa[0][0] == '') {
						mesa[0][0] = p1.nome
						if (mesa[0][1] != '') {
							p2.nome = mesa[0][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								//muda a coloração do 1:2 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][0] != '') {
							p2.nome = mesa[1][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
					
							}
						}
						loadImage('./imagens/' + p1.nome + 'blue.jpg').then((imagens) => {
							ctx.drawImage(imagens, 60, 50, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do segundo jogador", attachment)
						})
						
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '1:2':
					if (mesa[0][1] == '') {
						mesa[0][1] = p1.nome
						if (mesa[0][0] != '') {
							p2.nome = mesa[0][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]
							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 1:1 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						
						if (mesa[0][2] != '') {
							p2.nome = mesa[0][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][1] != '') {
							p2.nome = mesa[1][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'blue.jpg').then((imagens) => {
							ctx.drawImage(imagens, 298, 50, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do segundo jogador", attachment)
						})
						

					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '1:3':
					if (mesa[0][2] == '') {
						mesa[0][2] = p1.nome
						if (mesa[0][1] != '') {
							p2.nome = mesa[0][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 1:2 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][2] != '') {
							p2.nome = mesa[1][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								//muda a coloração do 2:3 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'blue.jpg').then((imagens) => {
							ctx.drawImage(imagens, 530, 50, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do segundo jogador", attachment)
						})
					
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break 
				case '2:1':
					if (mesa[1][0] == '') {
						mesa[1][0] = p1.nome
						if (mesa[0][0] != '') {
							p2.nome = mesa[0][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 1:1 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][1] != '') {
							p2.nome = mesa[1][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								//muda a coloração do 1:1 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[2][0] != '') {
							p2.nome = mesa[2][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								//muda a coloração do 3:1 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
							
						}
						loadImage('./imagens/' + p1.nome + 'blue.jpg').then((imagens) => {
							ctx.drawImage(imagens, 60, 285, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do segundo jogador", attachment)
						})
						
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '2:2':
					if (mesa[1][1] == '') {
						mesa[1][1] = p1.nome
						if (mesa[1][0] != '') {
							p2.nome = mesa[1][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 2:1 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[0][1] != '') {
							p2.nome = mesa[0][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 1:2 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][2] != '') {
							p2.nome = mesa[1][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								//muda a coloração do 2:3 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[2][1] != '') {
							p2.nome = mesa[2][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								//muda a coloração do 3:2 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'blue.jpg').then((imagens) => {
							ctx.drawImage(imagens, 298, 285, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do segundo jogador", attachment)
						})
						
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '2:3':
					if (mesa[1][2] == '') {
						mesa[1][2] = p1.nome
						if (mesa[0][2] != '') {
							p2.nome = mesa[0][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 1:3 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][1] != '') {
							p2.nome = mesa[1][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 2:2 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[2][2] != '') {
							p2.nome = mesa[2][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								//muda a coloração do 3:3 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'blue.jpg').then((imagens) => {
							ctx.drawImage(imagens, 530, 285, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do segundo jogador", attachment)
						})
						

					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '3:1':
					if (mesa[2][0] == '') {
						mesa[2][0] = p1.nome
						if (mesa[1][0] != '') {
							p2.nome = mesa[1][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 2:1 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[2][1] != '') {
							p2.nome = mesa[2][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								//muda a coloração do 3:2 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'blue.jpg').then((imagens) => {
							ctx.drawImage(imagens, 60, 530, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do segundo jogador", attachment)
						})
						
						
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '3:2':
					if (mesa[2][1] == '') {
						mesa[2][1] = p1.nome
						if (mesa[2][0] != '') {
							p2.nome = mesa[2][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 3:1 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][1] != '') {
							p2.nome = mesa[1][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 2:2 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[2][2] != '') {
							p2.nome = mesa[2][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								//muda a coloração do 3:3 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'blue.jpg').then((imagens) => {
							ctx.drawImage(imagens, 298, 530, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do segundo jogador", attachment)
						})
						
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '3:3':
					if(mesa[2][2] == '') {
						mesa[2][2] = p1.nome
						if (mesa[2][1] != '') {
							p2.nome = mesa[2][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 3:2 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][2] != '') {
							p2.nome = mesa[1][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 2:3 para blue
								loadImage('./imagens/' + p2.nome + 'blue.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'blue.jpg').then((imagens) => {
							ctx.drawImage(imagens, 530, 530, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do segundo jogador", attachment)
						})
						

					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				default:
					message.channel.send('Coordenada inválida')
					break
			}
		}	
	}
	if (message.content.startsWith('!p2')) {
		console.log('OLa')
		p1.nome = ''
		p1.numeros = ''
		p1.pos = ''
		texto = message.content
		//verifica se a carta usada consta no BD
		for (cont = 0; cont < 5; cont++) {
			if (texto.includes(cards.nomes[cont]) == true) {
				//buffer para o jogador ativo caso a carta constar no BD
				p1.nome = cards.nomes[cont]
				p1.numeros = cards.numeros[cont]
				p1.pos = cont 
			}
		}
		
		if (p1.nome != '') {
			texto = texto.slice(-3)
			switch (texto) {
				case '1:1':
					if (mesa[0][0] == '') {
						mesa[0][0] = p1.nome
						if (mesa[0][1] != '') {
							p2.nome = mesa[0][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								//muda a coloração do 1:2 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][0] != '') {
							p2.nome = mesa[1][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
					
							}
						}
						loadImage('./imagens/' + p1.nome + 'pink.jpg').then((imagens) => {
							ctx.drawImage(imagens, 60, 50, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do primeiro jogador", attachment)
						})
						
					} else {
						message.channel.send('Espaço já ocupado!')
					} 
					
					break
				case '1:2':
					if (mesa[0][1] == '') {
						mesa[0][1] = p1.nome
						if (mesa[0][0] != '') {
							p2.nome = mesa[0][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]
							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 1:1 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						
						if (mesa[0][2] != '') {
							p2.nome = mesa[0][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][1] != '') {
							p2.nome = mesa[1][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'pink.jpg').then((imagens) => {
							ctx.drawImage(imagens, 298, 50, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do primeiro jogador", attachment)
						})
						

					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '1:3':
					if (mesa[0][2] == '') {
						mesa[0][2] = p1.nome
						if (mesa[0][1] != '') {
							p2.nome = mesa[0][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 1:2 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][2] != '') {
							p2.nome = mesa[1][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								//muda a coloração do 2:3 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'pink.jpg').then((imagens) => {
							ctx.drawImage(imagens, 530, 50, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do primeiro jogador", attachment)
						})
						
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '2:1':
					if (mesa[1][0] == '') {
						mesa[1][0] = p1.nome
						if (mesa[0][0] != '') {
							p2.nome = mesa[0][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 1:1 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][1] != '') {
							p2.nome = mesa[1][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								//muda a coloração do 1:1 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[2][0] != '') {
							p2.nome = mesa[2][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								//muda a coloração do 3:1 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
							
						}
						loadImage('./imagens/' + p1.nome + 'pink.jpg').then((imagens) => {
							ctx.drawImage(imagens, 60, 285, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do primeiro jogador", attachment)
						})
						
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '2:2':
					if (mesa[1][1] == '') {
						mesa[1][1] = p1.nome
						if (mesa[1][0] != '') {
							p2.nome = mesa[1][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 2:1 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[0][1] != '') {
							p2.nome = mesa[0][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 1:2 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][2] != '') {
							p2.nome = mesa[1][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								//muda a coloração do 2:3 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[2][1] != '') {
							p2.nome = mesa[2][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								//muda a coloração do 3:2 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'pink.jpg').then((imagens) => {
							ctx.drawImage(imagens, 298, 285, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do primeiro jogador", attachment)
						})
						
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '2:3':
					if (mesa[1][2] == '') {
						mesa[1][2] = p1.nome
						if (mesa[0][2] != '') {
							p2.nome = mesa[0][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 1:3 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 50, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][1] != '') {
							p2.nome = mesa[1][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 2:2 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[2][2] != '') {
							p2.nome = mesa[2][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[3] > temp[1]) {
								//muda a coloração do 3:3 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'pink.jpg').then((imagens) => {
							ctx.drawImage(imagens, 530, 285, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do primeiro jogador", attachment)
						})
						

					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '3:1':
					if (mesa[2][0] == '') {
						mesa[2][0] = p1.nome
						if (mesa[1][0] != '') {
							p2.nome = mesa[1][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 2:1 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[2][1] != '') {
							p2.nome = mesa[2][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[3]) {
								//muda a coloração do 3:2 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'pink.jpg').then((imagens) => {
							ctx.drawImage(imagens, 60, 530, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turn do primeiro jogador", attachment)
						})
						
						
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '3:2':
					if (mesa[2][1] == '') {
						mesa[2][1] = p1.nome
						if (mesa[2][0] != '') {
							p2.nome = mesa[2][0]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 3:1 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 60, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][1] != '') {
							p2.nome = mesa[1][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 2:2 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[2][2] != '') {
							p2.nome = mesa[2][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[2] > temp[0]) {
								//muda a coloração do 3:3 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'pink.jpg').then((imagens) => {
							ctx.drawImage(imagens, 298, 530, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do primeiro jogador", attachment)
						})
						
					} else {
						message.channel.send('Espaço já ocupado!')
					}
					break
				case '3:3':
					if(mesa[2][2] == '') {
						mesa[2][2] = p1.nome
						if (mesa[2][1] != '') {
							p2.nome = mesa[2][1]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[0] > temp[2]) {
								//muda a coloração do 3:2 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 298, 530, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						if (mesa[1][2] != '') {
							p2.nome = mesa[1][2]
							p2.pos = cards.nomes.indexOf(p2.nome)
							temp = cards.numeros[p2.pos]

							if (p1.numeros[1] > temp[3]) {
								//muda a coloração do 2:3 para blue
								loadImage('./imagens/' + p2.nome + 'pink.jpg').then((imagens) => {
									ctx.drawImage(imagens, 530, 285, 220, 220)
									attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'triple-triad.png')
								})
							}
						}
						loadImage('./imagens/' + p1.nome + 'pink.jpg').then((imagens) => {
							ctx.drawImage(imagens, 530, 530, 220, 220)
							attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
							message.channel.send("Turno do primeiro jogador", attachment)
						})
						

					} else {
						message.channel.send('Espaço já ocupado!')
					}
				
					break
				default:
					message.channel.send('Coordenada inválida')
					break
			}
		}
		
	
	}

})

client.login('TOKEN')
