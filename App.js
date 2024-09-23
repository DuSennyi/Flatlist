import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const notifications = [
    {
        icon: "check-circle",
        title: "Bước 1 Xác định nhu cầu khách hàng",
        description: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
        date: "20/08/2020, 06:00"
    },
    {
        icon: "users",
        title: "Bạn có khách hàng mới!",
        description: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
        date: "20/08/2020, 06:00"
    },
    {
        icon: "users",
        title: "Khách hàng được chia sẻ bị trùng",
        description: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
        date: "20/08/2020, 06:00"
    },
    {
        icon: "users",
        title: "Khách hàng được thêm bị trùng",
        description: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
        date: "20/08/2020, 06:00"
    },
    {
        icon: "check-circle",
        title: "Công việc sắp đến hạn trong hôm nay",
        description: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
        date: "20/08/2020, 06:00"
    },
    {
        icon: "check-circle",
        title: "Công việc đã quá hạn",
        description: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
        date: "20/08/2020, 06:00"
    }
];

const NotificationItem = ({ notification }) => {
    return (
        <View style={styles.notificationItem}>
            <FontAwesome name={notification.icon} size={24} color="#3b82f6" />
            <View style={styles.notificationText}>
                <Text style={styles.title}>{notification.title}</Text>
                <Text style={styles.description}>{notification.description}</Text>
                <Text style={styles.date}>{notification.date}</Text>
            </View>
        </View>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Thông báo</Text>
            <FlatList
                data={notifications}
                renderItem={({ item }) => <NotificationItem notification={item} />}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f9fafb',
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    notificationItem: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        marginBottom: 8,
    },
    notificationText: {
        marginLeft: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        color: '#4b5563',
    },
    date: {
        color: '#6b7280',
        fontSize: 12,
    },
});

export default App;
