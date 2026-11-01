import os
import math
from PIL import Image, ImageDraw, ImageFont

WIDTH = 468
HEIGHT = 60

# Palette
BLACK = (10, 10, 14)
DARK_BG = (18, 18, 24)
DARK_NAVY = (8, 16, 32)
DARK_RED = (50, 10, 10)
GZONE_ORANGE = (255, 122, 26)
GZONE_FIRE = (255, 68, 0)
NEON_YELLOW = (255, 242, 0)
CYAN = (0, 240, 255)
WHITE = (255, 255, 255)
LIGHT_GRAY = (220, 224, 230)
MID_GRAY = (140, 145, 155)
DARK_GRAY = (45, 48, 55)
RED = (235, 25, 25)
BRIGHT_GREEN = (0, 255, 128)

# Load fonts safely
font_impact_lg = ImageFont.truetype("C:/Windows/Fonts/impact.ttf", 22)
font_impact_md = ImageFont.truetype("C:/Windows/Fonts/impact.ttf", 16)
font_impact_sm = ImageFont.truetype("C:/Windows/Fonts/impact.ttf", 13)

font_ariblk_lg = ImageFont.truetype("C:/Windows/Fonts/ariblk.ttf", 15)
font_ariblk_md = ImageFont.truetype("C:/Windows/Fonts/ariblk.ttf", 12)
font_ariblk_sm = ImageFont.truetype("C:/Windows/Fonts/ariblk.ttf", 10)

font_verdanab_md = ImageFont.truetype("C:/Windows/Fonts/verdanab.ttf", 10)
font_verdanab_sm = ImageFont.truetype("C:/Windows/Fonts/verdanab.ttf", 9)
font_verdanab_xs = ImageFont.truetype("C:/Windows/Fonts/verdanab.ttf", 8)
font_verdana_reg = ImageFont.truetype("C:/Windows/Fonts/verdana.ttf", 8)

def draw_3d_bevel(draw, box, light=WHITE, dark=BLACK, mid=MID_GRAY, pressed=False, thickness=2):
    x0, y0, x1, y1 = box
    for t in range(thickness):
        c_top = dark if pressed else (WHITE if t == 0 else light)
        c_bot = (WHITE if t == 0 else light) if pressed else dark
        draw.line([(x0 + t, y0 + t), (x1 - t, y0 + t)], fill=c_top)
        draw.line([(x0 + t, y0 + t), (x0 + t, y1 - t)], fill=c_top)
        draw.line([(x0 + t, y1 - t), (x1 - t, y1 - t)], fill=c_bot)
        draw.line([(x1 - t, y0 + t), (x1 - t, y1 - t)], fill=c_bot)

def draw_starburst(draw, center, r_outer, r_inner, points, fill_color, outline_color=None):
    cx, cy = center
    coords = []
    angle_step = math.pi / points
    for i in range(2 * points):
        r = r_outer if i % 2 == 0 else r_inner
        ang = i * angle_step - math.pi / 2
        px = cx + r * math.cos(ang)
        py = cy + r * math.sin(ang)
        coords.append((px, py))
    draw.polygon(coords, fill=fill_color, outline=outline_color)

def draw_shadowed_text(draw, pos, text, font, fill, shadow_color=BLACK, offset=(1,1)):
    x, y = pos
    ox, oy = offset
    draw.text((x + ox, y + oy), text, font=font, fill=shadow_color)
    draw.text((x, y), text, font=font, fill=fill)

def draw_scanlines(img, alpha=24):
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    for y in range(0, img.height, 2):
        d.line([(0, y), (img.width, y)], fill=(0, 0, 0, alpha))
    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")

def draw_hazard_border(draw, y_pos, height=3, col1=NEON_YELLOW, col2=BLACK, stripe_w=5):
    for x in range(-stripe_w, WIDTH + stripe_w * 2, stripe_w * 2):
        pts = [(x, y_pos), (x + stripe_w, y_pos), (x + stripe_w + height, y_pos + height), (x + height, y_pos + height)]
        draw.polygon(pts, fill=col1)

def draw_pixel_flame(draw, ox, oy):
    # 8x12 pixel flame icon
    flame = [
        (3, 0, NEON_YELLOW), (4, 0, NEON_YELLOW),
        (2, 1, GZONE_ORANGE), (3, 1, NEON_YELLOW), (4, 1, NEON_YELLOW), (5, 1, GZONE_ORANGE),
        (2, 2, GZONE_ORANGE), (3, 2, WHITE), (4, 2, NEON_YELLOW), (5, 2, GZONE_ORANGE),
        (1, 3, RED), (2, 3, GZONE_ORANGE), (3, 3, WHITE), (4, 3, NEON_YELLOW), (5, 3, GZONE_ORANGE), (6, 3, RED),
        (1, 4, RED), (2, 4, GZONE_FIRE), (3, 4, NEON_YELLOW), (4, 4, WHITE), (5, 4, GZONE_FIRE), (6, 4, RED),
        (1, 5, RED), (2, 5, GZONE_FIRE), (3, 5, NEON_YELLOW), (4, 5, NEON_YELLOW), (5, 5, GZONE_FIRE), (6, 5, RED),
        (2, 6, RED), (3, 6, GZONE_FIRE), (4, 6, GZONE_FIRE), (5, 6, RED),
    ]
    for dx, dy, col in flame:
        draw.point((ox + dx, oy + dy), fill=col)

def draw_pixel_mic(draw, ox, oy):
    # 8x11 pixel microphone icon
    # Grille (circle-ish)
    for dx, dy in [(1,0),(2,0),(3,0),(0,1),(1,1),(2,1),(3,1),(4,1),(0,2),(1,2),(2,2),(3,2),(4,2),(1,3),(2,3),(3,3)]:
        draw.point((ox + dx, oy + dy), fill=LIGHT_GRAY)
    # Band
    for dx in range(5):
        draw.point((ox + dx, oy + 4), fill=GZONE_ORANGE)
    # Handle
    for dy in range(5, 9):
        for dx in [1, 2, 3]:
            draw.point((ox + dx, oy + dy), fill=DARK_GRAY)
    # Cable
    draw.point((ox + 2, oy + 9), fill=BLACK)
    draw.point((ox + 3, oy + 10), fill=BLACK)

def draw_pixel_pointer(draw, ox, oy):
    # Classic Windows 95 hand cursor pointing right at button
    pixels = [
        # (dx, dy)
        (4,0), (5,0),
        (3,1), (4,1), (5,1), (6,1),
        (3,2), (4,2), (5,2), (6,2),
        (3,3), (4,3), (5,3), (6,3),
        (1,4), (2,4), (3,4), (4,4), (5,4), (6,4), (7,4), (8,4),
        (0,5), (1,5), (2,5), (3,5), (4,5), (5,5), (6,5), (7,5), (8,5), (9,5),
        (0,6), (1,6), (2,6), (3,6), (4,6), (5,6), (6,6), (7,6), (8,6), (9,6),
        (0,7), (1,7), (2,7), (3,7), (4,7), (5,7), (6,7), (7,7), (8,7),
        (1,8), (2,8), (3,8), (4,8), (5,8), (6,8), (7,8),
        (2,9), (3,9), (4,9), (5,9), (6,9),
    ]
    for dx, dy in pixels:
        draw.point((ox + dx, oy + dy), fill=WHITE)
    # Black outline around hand
    outline = [
        (4,-1), (5,-1),
        (2,1), (7,1),
        (2,2), (7,2),
        (2,3), (7,3),
        (0,4), (9,4),
        (-1,5), (10,5),
        (-1,6), (10,6),
        (-1,7), (9,7),
        (0,8), (8,8),
        (1,9), (7,9),
        (2,10), (3,10), (4,10), (5,10), (6,10)
    ]
    for dx, dy in outline:
        draw.point((ox + dx, oy + dy), fill=BLACK)

# ---------------- FRAME 1: TEASER / IDENTITY ----------------
def create_frame_1():
    img = Image.new("RGB", (WIDTH, HEIGHT), BLACK)
    draw = ImageDraw.Draw(img)
    
    # Left GZONE Brand Box
    brand_box = (4, 4, 115, 55)
    draw.rectangle(brand_box, fill=(25, 25, 30))
    draw_3d_bevel(draw, brand_box, light=(90, 90, 105), dark=(5, 5, 8), thickness=1)
    
    # G-ZONE text
    draw_shadowed_text(draw, (10, 6), "GZONE", font_impact_lg, fill=GZONE_ORANGE, shadow_color=BLACK, offset=(2, 2))
    draw_pixel_mic(draw, 98, 9)
    
    # Pill badge for RAP BATTLE
    draw.rectangle([(8, 34), (111, 48)], fill=NEON_YELLOW)
    draw_shadowed_text(draw, (12, 34), "RAP BATTLE", font_ariblk_sm, fill=BLACK, shadow_color=WHITE, offset=(0, 0))
    
    # Warning hazard stripes top & bottom
    draw_hazard_border(draw, 4, height=4, col1=NEON_YELLOW, col2=BLACK)
    draw_hazard_border(draw, 52, height=4, col1=GZONE_ORANGE, col2=BLACK)
    
    # Central text banner
    draw_shadowed_text(draw, (126, 11), "[ LORD OF THE ARCHIVES PRESENTS ]", font_verdanab_xs, fill=CYAN, shadow_color=BLACK)
    draw_shadowed_text(draw, (126, 23), "THE UK'S MOST RUTHLESS CLASHES", font_ariblk_md, fill=WHITE, shadow_color=(140, 20, 0), offset=(1, 1))
    draw_shadowed_text(draw, (126, 40), "GZONERAPBATTLE.CO.UK  //  OFFICIAL EVENT", font_verdanab_xs, fill=NEON_YELLOW, shadow_color=BLACK)
    
    # Right badge "LIVE"
    draw.rectangle([(420, 10), (458, 25)], fill=RED)
    draw_3d_bevel(draw, (420, 10, 458, 25), light=WHITE, dark=(80,0,0), thickness=1)
    draw.text((426, 12), "LIVE!", font=font_verdanab_xs, fill=WHITE)
    
    # Global outer 3D bevel
    draw_3d_bevel(draw, (0, 0, WIDTH - 1, HEIGHT - 1), light=LIGHT_GRAY, dark=DARK_GRAY, thickness=2)
    return draw_scanlines(img, 20)

# ---------------- FRAME 2: EVENT ANNOUNCEMENT ----------------
def create_frame_2():
    img = Image.new("RGB", (WIDTH, HEIGHT), DARK_NAVY)
    draw = ImageDraw.Draw(img)
    
    # Tech grid
    for x in range(0, WIDTH, 24):
        draw.line([(x, 0), (x, HEIGHT)], fill=(16, 32, 60))
    for y in range(0, HEIGHT, 12):
        draw.line([(0, y), (WIDTH, y)], fill=(16, 32, 60))
        
    # Red event badge on left
    draw.rectangle([(6, 6), (105, 53)], fill=RED)
    draw_3d_bevel(draw, (6, 6, 105, 53), light=(255, 140, 140), dark=(80, 0, 0), thickness=2)
    draw_shadowed_text(draw, (12, 10), "SEASON 1", font_impact_md, fill=WHITE, shadow_color=BLACK)
    draw_shadowed_text(draw, (12, 28), "FINALE", font_impact_lg, fill=NEON_YELLOW, shadow_color=BLACK)
    
    # Headline & Roster
    draw_shadowed_text(draw, (116, 8), ">>> GZONE LIVE SHOWDOWN <<<", font_ariblk_md, fill=GZONE_ORANGE, shadow_color=BLACK, offset=(1, 1))
    draw_shadowed_text(draw, (116, 24), "DEENO * ROMAN * TYMELESS * 1FLAYMR", font_verdanab_md, fill=WHITE, shadow_color=BLACK)
    
    # Yellow bottom ticker
    draw.rectangle([(114, 40), (460, 53)], fill=NEON_YELLOW)
    draw.text((120, 41), "THE BIGGEST RAP BATTLES IN LONDON // ARCHIVE LOTA", font=font_verdanab_xs, fill=BLACK)
    
    draw_3d_bevel(draw, (0, 0, WIDTH - 1, HEIGHT - 1), light=LIGHT_GRAY, dark=DARK_GRAY, thickness=2)
    return draw_scanlines(img, 20)

# ---------------- FRAME 3: TICKETS ON SALE NOW! (HERO FRAME) ----------------
def create_frame_3():
    img = Image.new("RGB", (WIDTH, HEIGHT), (24, 8, 4))
    draw = ImageDraw.Draw(img)
    
    # Fiery gradient bands
    for y in range(HEIGHT):
        col = (int(30 + y * 2.2), int(8 + y * 0.6), int(y * 0.2))
        draw.line([(0, y), (WIDTH, y)], fill=col)
        
    # Explosive 16-point Starburst on left
    draw_starburst(draw, (44, 30), r_outer=26, r_inner=18, points=16, fill_color=NEON_YELLOW, outline_color=RED)
    draw_shadowed_text(draw, (25, 16), "TICKETS", font_ariblk_sm, fill=RED, shadow_color=WHITE, offset=(0, 0))
    draw_shadowed_text(draw, (27, 28), "ON SALE!", font_ariblk_sm, fill=BLACK, shadow_color=WHITE, offset=(0, 0))
    
    # Pixel flames flanking the headline
    draw_pixel_flame(draw, 78, 11)
    draw_pixel_flame(draw, 442, 11)
    
    # Main Hero Title
    draw_shadowed_text(draw, (92, 6), "TICKETS ON SALE NOW!", font_impact_lg, fill=WHITE, shadow_color=GZONE_FIRE, offset=(2, 2))
    
    # Orange banner pill
    pill_box = (88, 33, 458, 52)
    draw.rectangle(pill_box, fill=GZONE_ORANGE)
    draw_3d_bevel(draw, pill_box, light=NEON_YELLOW, dark=(120, 40, 0), thickness=1)
    draw_shadowed_text(draw, (98, 36), "LIMITED CAPACITY - SECURE YOUR SPOT ONLINE TODAY!", font_verdanab_xs, fill=BLACK, shadow_color=WHITE, offset=(0, 0))
    
    draw_3d_bevel(draw, (0, 0, WIDTH - 1, HEIGHT - 1), light=WHITE, dark=DARK_GRAY, thickness=2)
    return draw_scanlines(img, 15)

# ---------------- FRAME 4: CALL TO ACTION / CLICK HERE ----------------
def create_frame_4():
    img = Image.new("RGB", (WIDTH, HEIGHT), BLACK)
    draw = ImageDraw.Draw(img)
    
    # Hazard border top & bottom
    draw_hazard_border(draw, 2, height=3, col1=NEON_YELLOW, col2=BLACK)
    draw_hazard_border(draw, 55, height=3, col1=NEON_YELLOW, col2=BLACK)
    
    # URL and verified text
    draw_shadowed_text(draw, (12, 10), "WWW.GZONERAPBATTLE.CO.UK", font_impact_md, fill=CYAN, shadow_color=BLACK, offset=(1, 1))
    draw_shadowed_text(draw, (12, 28), "OFFICIAL ONLINE TICKET BOX OFFICE", font_verdanab_xs, fill=WHITE, shadow_color=BLACK)
    draw_shadowed_text(draw, (12, 41), "[ LORD OF THE ARCHIVES VERIFIED EVENT ]", font_verdanab_xs, fill=GZONE_ORANGE, shadow_color=BLACK)
    
    # Windows 95 Raised 3D Button
    btn_box = (260, 11, 454, 49)
    draw.rectangle(btn_box, fill=(196, 198, 202))
    draw_3d_bevel(draw, btn_box, light=WHITE, dark=BLACK, mid=MID_GRAY, pressed=False, thickness=2)
    
    draw_shadowed_text(draw, (290, 15), "CLICK HERE!", font_ariblk_md, fill=RED, shadow_color=WHITE, offset=(0, 0))
    draw.text((284, 31), "BUY TICKETS NOW >>", font=font_verdanab_xs, fill=BLACK)
    
    # Pixel cursor pointing directly at the button
    draw_pixel_pointer(draw, 240, 20)
    
    draw_3d_bevel(draw, (0, 0, WIDTH - 1, HEIGHT - 1), light=LIGHT_GRAY, dark=DARK_GRAY, thickness=2)
    return draw_scanlines(img, 20)

# ---------------- FRAME 5: FLASH / PRESSED BUTTON FRAME ----------------
def create_frame_5():
    # Caution yellow flash background
    img = Image.new("RGB", (WIDTH, HEIGHT), (255, 235, 10))
    draw = ImageDraw.Draw(img)
    
    # Red border
    draw.rectangle([(2, 2), (WIDTH - 3, HEIGHT - 3)], outline=RED, width=2)
    
    # Urgent text
    draw_shadowed_text(draw, (12, 8), "WARNING: SELLING FAST!", font_impact_md, fill=RED, shadow_color=BLACK, offset=(1, 1))
    draw_shadowed_text(draw, (12, 26), "WWW.GZONERAPBATTLE.CO.UK", font_ariblk_sm, fill=BLACK, shadow_color=WHITE, offset=(0, 0))
    draw_shadowed_text(draw, (12, 41), "DON'T GET LEFT OUTSIDE THE VENUE!", font_verdanab_xs, fill=DARK_RED, shadow_color=WHITE, offset=(0, 0))
    
    # Pressed button on right
    btn_box = (260, 11, 454, 49)
    draw.rectangle(btn_box, fill=(255, 50, 0))
    draw_3d_bevel(draw, btn_box, light=WHITE, dark=BLACK, mid=MID_GRAY, pressed=True, thickness=2)
    
    draw_shadowed_text(draw, (274, 16), ">> GET TICKETS! <<", font_ariblk_md, fill=NEON_YELLOW, shadow_color=BLACK, offset=(1, 1))
    draw_shadowed_text(draw, (288, 32), "CLASH OF THE YEAR", font_verdanab_xs, fill=WHITE, shadow_color=BLACK, offset=(0, 0))
    
    draw_3d_bevel(draw, (0, 0, WIDTH - 1, HEIGHT - 1), light=WHITE, dark=DARK_GRAY, thickness=2)
    return draw_scanlines(img, 15)

frames = [
    (create_frame_1(), 1400), # 1.4s
    (create_frame_2(), 1300), # 1.3s
    (create_frame_3(), 1700), # 1.7s (Hero Frame)
    (create_frame_4(), 1300), # 1.3s (Click Here CTA)
    (create_frame_5(), 600),  # 0.6s (Flash Frame)
]

out_dir = "public/banners"
os.makedirs(out_dir, exist_ok=True)

img_frames_1x = []
durations = []
for idx, (f, dur) in enumerate(frames):
    f.save(os.path.join(out_dir, f"retro-banner-frame-{idx+1}.png"))
    p_frame = f.convert("P", palette=Image.Palette.ADAPTIVE, dither=Image.Dither.FLOYDSTEINBERG)
    img_frames_1x.append(p_frame)
    durations.append(dur)

# 1X GIF (468x60 native retro dimensions)
gif_1x_path = os.path.join(out_dir, "gzone-retro-banner.gif")
img_frames_1x[0].save(
    gif_1x_path,
    save_all=True,
    append_images=img_frames_1x[1:],
    duration=durations,
    loop=0,
    optimize=False
)
print(f"Generated 1X GIF: {gif_1x_path}")

# 2X GIF (936x120 crisp nearest-neighbor upscale for modern high-DPI displays)
img_frames_2x = []
for f, dur in frames:
    f_2x = f.resize((WIDTH * 2, HEIGHT * 2), Image.Resampling.NEAREST)
    f_2x_p = f_2x.convert("P", palette=Image.Palette.ADAPTIVE, dither=Image.Dither.FLOYDSTEINBERG)
    img_frames_2x.append(f_2x_p)

gif_2x_path = os.path.join(out_dir, "gzone-retro-banner-2x.gif")
img_frames_2x[0].save(
    gif_2x_path,
    save_all=True,
    append_images=img_frames_2x[1:],
    duration=durations,
    loop=0,
    optimize=False
)
print(f"Generated 2X GIF: {gif_2x_path}")

# Also copy to brain artifacts directory so it can be previewed or embedded
artifact_dir = r"C:\Users\bradl\.gemini\antigravity\brain\4b07bec9-8283-4119-933d-bde70a423076"
if os.path.exists(artifact_dir):
    import shutil
    shutil.copy(gif_1x_path, os.path.join(artifact_dir, "gzone-retro-banner.gif"))
    shutil.copy(gif_2x_path, os.path.join(artifact_dir, "gzone-retro-banner-2x.gif"))
    for idx in range(1, 6):
        fn = f"retro-banner-frame-{idx}.png"
        shutil.copy(os.path.join(out_dir, fn), os.path.join(artifact_dir, fn))
    print(f"Copied artifacts to {artifact_dir}")
