import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLConnector {
    private static MySQLConnector connector;
    private Connection connection;

    private MySQLConnector() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://ec2-52-30-211-3.eu-west-1.compute.amazonaws.com/db02327?"
                    + "user=db02327&password=db02327");
            System.out.println("MySQL Connection established");
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static MySQLConnector getInstance() {
        if (connector == null){
            connector = new MySQLConnector();
        }
        return connector;
    }

    public Connection getConnection() {
        return connection;
    }
}