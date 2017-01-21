<%@ page language="java" import="java.sql.*,java.util.*,net.sf.json.JSONArray,com.hao.object.User" contentType="text/html; charset=utf-8" %>
<%
//Thread.sleep(2000);//模拟延迟  测试异步;
//String RL = "jdbc:mysql://192.168.8.104:3306/haochat?useUnicode=true&characterEncoding=utf-8&user=root&password=haoning";
String RL = "jdbc:mysql://"+request.getServerName()+":3306/haochat?useUnicode=true&characterEncoding=utf-8&user=root&password=haoning";
//String RL = "jdbc:mysql://"+request.getServerName()+":3308/haochat?useUnicode=true&characterEncoding=utf-8&user=root&password=Haoning123";

String myname=request.getParameter("myname");
//String sqlStr = "select * from users where id in (select fid from friend where uid='"+uid+"');";
//String sqlStr = "select * from users u,friend f  where u.id=f.fid and f.uid='"+uid+"'";
String sqlStr = "select * from users u,friend f  where u.username=f.yourname and f.myname='"+myname+"'";
try {
	//out.print("hahahah---->"+sqlStr);
	Class.forName("com.mysql.jdbc.Driver");
	Connection con = DriverManager.getConnection(RL);
	Statement st = con.createStatement();
	ResultSet rs = st.executeQuery(sqlStr);
	List users=new ArrayList();

	while (rs.next()) {
		User user = new User();
		user.setId(rs.getInt("id"));
		user.setUsername(rs.getString("username"));
		user.setNickname(rs.getString("nickname"));
		user.setImg_url(rs.getString("img_url"));
		user.setOther(rs.getString("other"));
		user.setNewmsg(rs.getString("newmsg"));
		users.add(user);
	}
	JSONArray jsonArray = JSONArray.fromObject( users );  
    out.println( jsonArray );  
	rs.close();
	st.close();
	con.close();
} catch (Exception err) {
	err.printStackTrace();
}
%>
