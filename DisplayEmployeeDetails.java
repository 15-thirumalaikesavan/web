import java.sql.Statement;
import java.security.interfaces.RSAKey;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DisplayEmployeeDetails {
public static void main(String[] args) {
	try {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		System.out.println("Connected!");
		Connection connection = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "hr", "hr");
		Statement statement = connection.createStatement();
		ResultSet resultSet = statement.executeQuery("select * from employees");
		while(resultSet.next()) {
//		System.out.println(resultSet.getInt(1));	
			System.out.println(resultSet.getInt("employee_id") + " " + resultSet.getString(2));
		}
	} catch (ClassNotFoundException | SQLException e) {
		System.out.println(e);
	}
	
}
}
