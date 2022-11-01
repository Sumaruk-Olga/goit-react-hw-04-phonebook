import PropTypes from 'prop-types';
import { Label, Input } from "components/Filter/Filter.styled";




export const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} title='start typing a name to search'/>
  </Label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}