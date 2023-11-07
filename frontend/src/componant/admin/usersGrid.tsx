import { useEffect, useState } from "react";
import { Space, Table } from "antd";
import Column from "antd/es/table/Column";
import {
  selectUser,
  useDisableUserMutation,
  useLazyGetUsersQuery,
} from "../../store/api/userApi";
import { useAppSelector } from "../../store/store";

type Props = {
  search?: string;
  onClickEdit: (data: UserType) => void;
};

const UsersGrid = ({ search, onClickEdit }: Props) => {
  const [fetchUsers, { data: users }] = useLazyGetUsersQuery();
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
  const user = useAppSelector(selectUser);
  const [disableUser] = useDisableUserMutation();

  useEffect(() => {
    const filterProductsBySearch = (item: UserType) => {
      if (search) {
        return (
          item.name.toUpperCase().includes(search.toUpperCase()) ||
          item.email.toUpperCase().includes(search.toUpperCase())
        );
      }
      return true;
    };

    setFilteredUsers(
      users
        ?.filter((e) => filterProductsBySearch(e))
        .filter((e) => e._id != user?._id)
        .map((e) => ({ ...e, key: e._id })) ?? []
    );
  }, [users, search]);

  useEffect(() => {
    fetchUsers({});
  }, []);

  return (
    <div>
      {filteredUsers && (
        <Table dataSource={filteredUsers} pagination={false}>
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column title="Phone" dataIndex="phone" key="phone" />
          <Column title="Type" dataIndex="usertype" key="usertype" />
          <Column
            title="Action"
            key="action"
            render={(_: any, record: UserType) => (
              <Space size="middle">
                <a onClick={() => onClickEdit(record)}>Edit</a>
                <a
                  onClick={(e) =>
                    disableUser({
                      is_deleted: !record.is_deleted,
                      user_id: record._id,
                    })
                  }
                >
                  {record.is_deleted ? "Enable" : "Disable"}
                </a>
              </Space>
            )}
          />
        </Table>
      )}
    </div>
  );
};

export default UsersGrid;
