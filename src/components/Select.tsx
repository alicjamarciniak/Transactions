import { useEffect, useState } from "react";
import styled from "styled-components";
import arrowBottom from "../assets/icons/arrow-bottom-icon.png";

type SelectProps = {
  data: { id: number; option: number | string }[];
  placeholder?: string;
};

const Select = ({ data, placeholder }: SelectProps) => {
  const [checkedBoxes, setCheckboxes] = useState<number[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxId = Number(e.target.id);
    if (e.target.checked) {
      setCheckboxes([...checkedBoxes, checkboxId]);
    } else {
      setCheckboxes(checkedBoxes.filter((el) => el !== checkboxId));
    }
  };

  useEffect(() => {
    // console.log(checkedBoxes);
  }, [checkedBoxes]);

  return (
    <>
      <SelectBox onClick={toggleList}>
        {placeholder}
        <SelectIcon src={arrowBottom} />
      </SelectBox>
      <Checkboxes expanded={isExpanded}>
        <div>
          <label>
            <input type="checkbox" id="all" />
            Select All
          </label>
        </div>
        {data.map((element) => (
          <div key={`option-${element.id}`}>
            <label>
              <input
                type="checkbox"
                id={element.id.toString()}
                onChange={handleOnChange}
              />
              {element.option}
            </label>
          </div>
        ))}
      </Checkboxes>
    </>
  );
};

const SelectBox = styled.div`
  border: 2px solid rgb(120, 120, 120);
  border-radius: 6px;
  box-sizing: border-box;
  background-color: rgb(237, 237, 237);
  padding: 10px;
  position: relative;
  width: 250px;
`;

const SelectIcon = styled.img`
  height: 10px;
  position: absolute;
  right: 10px;
  top: 50%;
  bottom: 50%;
  margin: auto;
`;

const Checkboxes = styled.div<{ expanded: boolean }>`
  border: 2px solid rgb(120, 120, 120);
  border-top: none;
  border-radius: 0 0 6px 6px;
  background-color: rgb(237, 237, 237);
  box-sizing: border-box;
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  position: absolute;
  text-align: left;
  width: 250px;
  height: 30vh;
  overflow: auto;
`;

export default Select;
