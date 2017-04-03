/**
 * Created by tengzhongwei on 3/17/17.
 */
import {Table} from 'antd'
const { Column, ColumnGroup } = Table;

export default class WritingConference extends React.Component{


  render(){
    const locale = {
      filterTitle: 'filter',
      filterConfirm: 'Confirm',
      filterReset: 'Reset',
      emptyText: 'Empty Data',
    };
    const data = [{
      key: '1',
      date: 'John',
      accom: 'Brown',
      goal: 32,
      comments: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      date: 'Jim',
      accom: 'Green',
      goal: 42,
      comments: 'London No. 1 Lake Park',
    }, {
      key: '3',
      date: 'Joe',
      accom: 'Black',
      goal: 32,
      comments: 'Sidney No. 1 Lake Park',
    }];


    return(
      <div>
        <b>My Writing Conference</b>
        <Table dataSource={data}
               footer={() => 'Footer'}
              locale={locale}>

          <Column
            title="Date"
            dataIndex="date"
            key="date"
          />
          <Column
            title="Accomplishments"
            dataIndex="accom"
            key="accom"
          />
          <Column
            title="Goal"
            dataIndex="goal"
            key="goal"
          />
          <Column
            title="Comments"
            dataIndex="comments"
            key="comments"
          />
        </Table>
      </div>
    )
  }
}
