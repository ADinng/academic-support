import jieba
import numpy as np
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from PIL import Image
from collections import Counter
from PIL import ImageOps

# 1. 开始预处理文本 

# 读取专业论文内容
with open(r'Z:/study/new/title.txt', 'r', encoding='utf-8') as f:
    text = f.read()      #打开该路径下的文本文件。

# 添加专业词汇
terms = [
    '病虫害管理', '气象预测', '精细化种植', '智慧农机', '市场价格监测',
    '国家粮食安全'
]
for term in terms:
    jieba.add_word(term)   #添加这些词，在后续分词过程中专业词汇不被切分


# 读取停用词表
stopwords = set()
with open(r'Z:/study/new/stopwords.txt', 'r', encoding='utf-8') as f:
    for line in f:
        stopwords.add(line.strip())  #读取该路径下的停用此表，一些数字，连接词都被收录停用切分统计。

# 分词 & 过滤停用词
words = jieba.lcut(text)
filtered_words = [word for word in words if len(word) > 1 and word not in stopwords]

# 同义词替换
synonyms = {
    '不足': '制约', '国家粮食安全':'粮食安全'
}         #将部分意思相近的词汇做一次同义词替换，以免词云中出现多频同义词。
final_words = [synonyms.get(word, word) for word in filtered_words]

# 统计词频
word_counts = Counter(final_words)
top_100 = word_counts.most_common(100)

#2. 生成词云


# 设置词云对象
wc = WordCloud(
    font_path='C:/Windows/Fonts/msyh.ttc',  #设置文字 
    background_color='white',  #设置背景  
    max_words=100,   #设置频率
    collocations=False   #拒绝自动组合
)

# 根据频率生成词云
wc.generate_from_frequencies(dict(top_100))

# 3. 输出词云

plt.figure(figsize=(12,8))#创建一块画布，设置大小
plt.imshow(wc, interpolation='bilinear')
plt.axis('off') #隐藏坐标
plt.savefig('new.png', dpi=300, bbox_inches='tight')  #保存图片
plt.show()
