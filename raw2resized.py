import os
from PIL import Image

raw_dir = "./docs/img/raw"
resized_dir = "./docs/img/resized"
sample_dir = "./docs/img/sample"

bg_name = "no"
resize_width = 250

frame_dir = "/".join([raw_dir, "frame"])
sentence_dir = "/".join([raw_dir, "sentence"])
illust_dir = "/".join([raw_dir, "illust"])
bg_dir = "/".join([raw_dir, "bg"])

frame_pathes = [f for f in os.listdir(frame_dir) if not f.startswith('.')]
sentence_pathes = [f for f in os.listdir(sentence_dir) if not f.startswith('.')]
illust_pathes = [f for f in os.listdir(illust_dir) if not f.startswith('.')]
bg_pathes = [f for f in os.listdir(bg_dir) if not f.startswith('.')]


def overlay_picts(pict_pathes):
    image = None
    for pict_path in pict_pathes:
        if image:
            image = Image.alpha_composite(image, Image.open(pict_path).convert("RGBA"))
        else:
            image = Image.open(pict_path).convert("RGBA")
    return image


if __name__ == "__main__":
    illust_pathes_dic = {}
    for illust_path in illust_pathes:
        name = illust_path.split("_")[0]
        if name in illust_pathes_dic:
            illust_pathes_dic[name].append(illust_path)
        else:
            illust_pathes_dic[name] = [illust_path, ]

    sentence_path_dic = {sp.split("_")[0]: sp for sp in sentence_pathes}
    bg_path_dic = {bg.split(".")[0]: bg for bg in bg_pathes}

    for frame_path in frame_pathes:
        name = frame_path.split(".")[0]

        #  sentence
        sentence_pic = overlay_picts([
            "/".join([bg_dir, bg_path_dic[bg_name]]),
            "/".join([sentence_dir, sentence_path_dic[name]]),
            "/".join([frame_dir, frame_path]),
        ])
        sentence_pic_resized = sentence_pic.resize((resize_width, int(resize_width/sentence_pic.width * sentence_pic.height)), Image.BICUBIC)
        sentence_pic_resized.save(
            "/".join([resized_dir, sentence_path_dic[name].replace(".png", ".jpg")]),
            'JPEG', quality=90, optimize=True
        )

        #  illust
        for illust_path in illust_pathes_dic.get(name, []):
            illust_pic = overlay_picts([
                "/".join([illust_dir, illust_path]),
                "/".join([frame_dir, frame_path]),
            ])
            illust_pic_resized = illust_pic.resize((resize_width, int(resize_width/illust_pic.width * illust_pic.height)), Image.BICUBIC)
            illust_pic.save(
                "/".join([sample_dir, illust_path.replace(".png", ".jpg")]),
                'JPEG', quality=100, optimize=True
            )
            illust_pic_resized.save(
                "/".join([resized_dir, illust_path.replace(".png", ".jpg")]),
                'JPEG', quality=100, optimize=True
            )





