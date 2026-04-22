import os
import sys

file_path = "c:\\\\Users\\\\bradl\\\\Desktop\\\\lolta\\\\lord-of-the-archives\\\\lordofthearchives\\\\src\\\\data\\\\battles.ts"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

text = text.replace(",\\n{\\n  \\"id\\": \\"425\\"", ",\\n{\\n  \\"id\\": \\"425\\"")
text = text.replace("}\\n];", "\\n}\\n];")

# It seems `\\n` was literal. Let's just do:
text = text.replace(",\\n{", ",\\n{")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(text.replace(",\\\\n", ",\\n").replace("}\\\\n", "}\\n"))
