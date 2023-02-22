import "./widgetlg.css"

export default function WidgetLg() {
  const Button =({type})=>{
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Transaction</h3>
        <table className="widgetTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    className="widgetImg"/>
                    <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="WidgetDate">2 june 2022</td>
            <td className="WidgetAmount">$1,234</td>
            <td className="WidgetStatus">
              <Button type='Approved'/>
            </td>
          </tr>

          
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              
              className="widgetImg"/>
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="WidgetDate">2 june 2022</td>
            <td className="WidgetAmount">$1,234</td>
            <td className="WidgetStatus">
              <Button type='Decline'/>
            </td>
          </tr>

          
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              className="widgetImg"/>
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="WidgetDate">2 june 2022</td>
            <td className="WidgetAmount">$1,234</td>
            <td className="WidgetStatus">
              <Button type='Pending'/>
            </td>
          </tr>

          
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              className="widgetImg"/>
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="WidgetDate">2 june 2022</td>
            <td className="WidgetAmount">$1,234</td>
            <td className="WidgetStatus">
              <Button type='Approved'/>
            </td>
          </tr>
        </table>
    </div>
  )
}
