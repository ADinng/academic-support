import jieba
import numpy as np
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from PIL import Image
from collections import Counter
from PIL import ImageOps

# 1. 开始预处理文本 

# 读取专业论文内容
with open(r'Z:/study/xuexi/travelmodel.txt', 'r', encoding='utf-8') as f:
    text = f.read()      #以只读模式打开该路径下的文本文件。

# 添加专业词汇
terms = [
    '五一假期', '旅游热度', '智慧旅游', '文化和旅游消费周', '演艺潮流游',
    '文旅大模型', 'AI智能体', '智慧景区', 'AI+文旅', 'CBG模型'
]
for term in terms:
    jieba.add_word(term)   #添加这些词，在后续分词过程中专业词汇不被切分


# 读取停用词表
stopwords = set()
with open(r'Z:/study/xuexi/stopwords.txt', 'r', encoding='utf-8') as f:
    for line in f:
        stopwords.add(line.strip())  #读取该路径下的停用此表，一些数字，连接词都被收录停用切分统计。

# 分词 & 过滤停用词
words = jieba.lcut(text)
filtered_words = [word for word in words if len(word) > 1 and word not in stopwords]

# 同义词替换
synonyms = {
    '文化旅游': '文旅', '文旅活动': '活动', '旅游活动': '文旅','旅游景区':'景区','旅游线路':'路线','服务质量':'服务','出行者':'	游客',
    '文旅供给': '供给', 'AI模型': 'AI', '智慧服务':'智能服务', '数字展演':'线上展播',
}         #将部分意思相近的词汇做一次同义词替换，以免词云中出现多频同义词。
final_words = [synonyms.get(word, word) for word in filtered_words]

# 统计词频
word_counts = Counter(final_words)
for term in terms:
    if term in word_counts:
        word_counts[term] += 20   #给专业词汇加20次出现频率，以免这些词在词云分布里被忽视
top_100 = word_counts.most_common(100)

#2. 生成词云


# 设置词云对象
wc = WordCloud(
    font_path='C:/Windows/Fonts/msyh.ttc',  #设置文字 
    background_color='white',  #设置背景
   # mask=mask,  
    max_words=100,   #设置频率
    collocations=False   #拒绝自动组合
)

# 根据频率生成词云
wc.generate_from_frequencies(dict(top_100))

# 3. 输出词云

plt.figure(figsize=(12,8))#创建一块画布，设置大小
plt.imshow(wc, interpolation='bilinear')
plt.axis('off') #隐藏坐标
plt.savefig('travel.png', dpi=300, bbox_inches='tight')  #保存图片
plt.show()
