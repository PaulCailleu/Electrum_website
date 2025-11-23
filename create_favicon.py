from PIL import Image, ImageOps
import numpy as np

# Load original logo
img = Image.open("/Users/paulcailleu/Documents/Investissements/Electrum_website/assets/electrum_ring_master_1024.png").convert("RGBA")


# Output dictionary of generated assets
outputs = {}

sizes = [32, 180, 192]
for s in sizes:
    icon = img.resize((s, s), Image.LANCZOS)
    path = f"/Users/paulcailleu/Documents/Investissements/Electrum_website/assets/favicon-{s}.png"
    icon.save(path, format="PNG")
    outputs[f"favicon-{s}.png"] = path

# Multi-size ICO
ico_path = "/Users/paulcailleu/Documents/Investissements/Electrum_website/assets/favicon.ico"
img.save(ico_path, sizes=[(16,16), (32,32), (48,48)], format="ICO")
outputs["favicon.ico"] = ico_path

outputs
