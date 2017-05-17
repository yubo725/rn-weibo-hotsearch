/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Button,
  FlatList,
  Image,
  TouchableHighlight,
  PixelRatio
} from 'react-native';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var topTabNames = ['实时', '好友', '热点', '名人', '潮流'];

export default class AwesomeProject extends Component {
  render() {
  	var topTabs = [];
  	var listData = [];
  	for (var i = 0; i < topTabNames.length; i++) {
  		topTabs.push(
  			<TouchableOpacity onPress={this.handleTopTabClick} key={"tab-" + i} style={styles.topTabItem}>
	  			<View>
					<Image style={styles.topTabItemImage} source={require('./images/ic_person.png')} />
					<Text>{topTabNames[i]}</Text>
				</View>
			</TouchableOpacity>
		);
		topTabs.push(<View key={"divider-" + i} style={styles.topTabDivider} />);
  	}
  	topTabs.splice(-1, 1);
  	for (var i = 0; i < 20; i++) {
  		listData.push({key: i, index: i});
  	}
    return (
    	<View style={styles.container}>
    		<View style={styles.titleContainer}>
    			<Image style={styles.titleLeftImage} source={require('./images/ic_back.png')}/>
    			<View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
    			<Text style={styles.title}>实时热搜榜</Text>
    			</View>
    			<Image opacity={0.0} style={styles.titleRightImage} source={require('./images/ic_back.png')}/>
    		</View>
    		<View style={{height: 6, backgroundColor: '#F2F2F2'}}></View>
    		<Image style={styles.bannerImage} source={require('./images/ic_banner.png')} />
    		<View style={styles.topTabsContainer}>
    			{topTabs}
    		</View>
    		<View style={{height: 5, backgroundColor: '#F2F2F2'}} />
    		<Text style={{paddingLeft: 15, paddingTop: 5, paddingRight: 15, paddingBottom: 5, backgroundColor: '#F2F2F2'}}>实时搜索热点，每分钟更新一次</Text>
    		<FlatList 
    			style={{backgroundColor: '#FFFFFF'}}
				data={listData}
				renderItem={this.renderRow}
    		/>
    	</View>
    );
  }
  renderRow(item) {
	return (
		<View>
			<TouchableOpacity onPress={this.handleListItemClick} activeOpacity={0.5}>
				<View style={listItemStyles.listItemContainer}>
					<Text style={listItemStyles.listItemIndexLabel}>{item.index + 1}</Text>
					<Text style={listItemStyles.listItemTitleLabel}>这里显示热搜标题</Text>
					<Text style={listItemStyles.listItemCountLabel}>626645</Text>
					<Image style={listItemStyles.listItemImage} source={require('./images/ic_hot.png')} />
				</View>
			</TouchableOpacity>
			<View style={{height: 1 / PixelRatio.get(), backgroundColor: '#D3D3D3'}} />
		</View>
	);
  }
  handleTopTabClick(item) {
	console.log(item);
  }
  handleListItemClick() {

  }
}

const listItemStyles = StyleSheet.create({
	listItemContainer: {
		flexDirection: 'row',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	listItemIndexLabel: {
		color: '#FF0000',
		marginLeft: 15,
		marginRight: 15,
		fontSize: 18,
	},
	listItemTitleLabel: {
		fontSize: 16,
		color: '#000000'
	},
	listItemCountLabel: {
		flex: 1,
		paddingLeft: 10,
	},
	listItemImage: {
		width: 20,
		height: 20,
		marginRight: 15,
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FAFAFA'
	},
	titleContainer: {
		flexDirection: 'row',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleLeftImage: {
		width: 30,
		height: 30,
		marginLeft: 10,
	},
	titleRightImage: {
		width: 30,
		height: 30,
		marginRight: 10,
	},
	title: {
		fontSize: 18,
		color: '#303030',
	},
	bannerImage: {
		width: width,
		height: width / 3.72,
	},
	topTabsContainer: {
		flexDirection: 'row',
		height: 80,
		backgroundColor: '#FFFFFF'
	},
	topTabItem: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	topTabItemImage: {
		width: 30,
		height: 30,
	},
	topTabDivider: {
		width: 1 / PixelRatio.get(),
		height: 60,
		backgroundColor: '#D3D3D3',
		marginTop: 10,
		marginBottom: 10,
	}
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
