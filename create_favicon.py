from PIL import Image

# Load the logo image (adjust path if needed)
img_path = "/Users/paulcailleu/Documents/Investissements/Electrum_website/assets/logo_electrum.png"
img = Image.open(img_path)

# Create different favicon sizes
sizes = [("favicon-32.png", 32), ("favicon-180.png", 180), ("favicon-192.png", 192)]

output_paths = []

for name, size in sizes:
    resized = img.resize((size, size), Image.LANCZOS)
    out_path = f"/Users/paulcailleu/Documents/Investissements/Electrum_website/assets/{name}"
    resized.save(out_path, format="PNG")
    output_paths.append(out_path)

# Also create a .ico file containing multiple resolutions
ico_path = "/Users/paulcailleu/Documents/Investissements/Electrum_website/assets/favicon.ico"
img.save(ico_path, sizes=[(16,16), (32,32), (48,48)])

output_paths.append(ico_path)

output_paths
