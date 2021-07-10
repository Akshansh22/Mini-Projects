import discord
import os
import requests
import json
import random

client=discord.Client()

sad_words=["sad", "udaas", "depressed", "unhappy", "angry", "miserable", "depressing", "suicide", "chutiya", "pagal","die","marna","bura"]

starter_encouragements=["Cheer up!", "Bhagwan pe bharosa rakh beta", "https://tenor.com/view/munna-bhai-mbbs-sanjay-dutt-tum-bohot-mast-kaam-karta-hai-maksood-bhai-bauhat-mast-kam-gif-18194985", "https://memes.co.in/memes/update/uploads/2021/04/Ezu-hMsVkAM5j94.jpg", "https://cdn-0.therandomvibez.com/wp-content/uploads/2020/11/Cheer-Up-Dog-Memes.jpg?ezimgfmt=ng:webp/ngcb5", "https://tenor.com/view/all-is-well-all-izz-well-3idiots-three-idiots-3idiotas-gif-16016223", "https://cdn-0.therandomvibez.com/wp-content/uploads/2020/11/Cheer-Up-Meme-For-Bad-Day.jpg?ezimgfmt=ng:webp/ngcb5","https://cdn-0.therandomvibez.com/wp-content/uploads/2020/11/Cheer-Up-Memes-For-Whatsapp-Status.jpg?ezimgfmt=ng:webp/ngcb5", "https://cdn-0.therandomvibez.com/wp-content/uploads/2020/11/Funny-Cheer-Up-Memes.jpeg?ezimgfmt=ng:webp/ngcb5"]

def get_quote():
  response=requests.get("https://zenquotes.io/api/random")
  json_data=json.loads(response.text)
  quote=json_data[0]['q'] + " -"+ json_data[0]['a']
  return(quote)

@client.event
async def on_ready():
  print("Logged in as  {0.user}".format(client))

@client.event
async def on_message(message):
  if message.author==client.user:
    return
  msg=message.content
  
  if msg.startswith(".inspire"):
    quote=get_quote()
    await message.channel.send(quote)
  
  if any(word in msg for word in sad_words):
    await message.channel.send(random.choice(starter_encouragements))

client.run(os.environ['TOKEN'])