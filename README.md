# WeiboHotSearch-ReactNative
用ReactNative实现的微博热搜榜界面

# 截图
![image](https://github.com/yubo725/WeiboHotSearch-ReactNative/blob/master/screenshot/screenshot.jpg)

# 问题
* TouchableHighlight TouchableOpacity组件，如果不设置onPress则没有按下的效果
* FlatList在快速滑动时，可能出现暂时的空白
* 隐藏一个元素，可以使用opacity设置透明度为0，但此时元素还占据屏幕空间，或者使用state控制元素的显示和隐藏，代码如下：
```
    showOrHideElement() {
      if (this.state.hidden) {
        return null;
      }
      return (
        <Text>Hello World.</Text>
      );
    }
```
