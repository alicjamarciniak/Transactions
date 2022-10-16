import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Select, SelectData } from "../../components";
import device from "../../device";
import useTransactions, { Transaction } from "../../hooks/useTransactions";

const prepareDataForSelect = (transactions: Transaction[]) =>
  transactions.map(({ id, beneficiary }) => ({
    id,
    option: beneficiary,
  }));

const removeBeneficiaryDuplicates = (filterData: SelectData[]) =>
  filterData.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.option === value.option)
  );

const Filter = () => {
  const { transactions } = useTransactions();
  const [ids, setIds] = useState<number[]>([]);

  const selectData = removeBeneficiaryDuplicates(
    prepareDataForSelect(transactions)
  );

  useEffect(() => {
    console.log(ids);
  }, [ids]);

  return (
    <Component className="Card">
      <Card>
        <Select
          data={selectData}
          placeholder="Select beneficiaries"
          setCheckedIdsCallback={setIds}
          isCheckedByDefault={true}
          test={[1, 2, 3, 4]}
        />
        <button>Reset filter</button>
      </Card>
    </Component>
  );
};

const Component = styled.div`
  margin-top: 10px;

  @media ${device.laptop} {
    margin: 0 5px 0 0;
  }
`;

export default Filter;
