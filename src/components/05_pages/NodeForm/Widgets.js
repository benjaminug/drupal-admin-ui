import NumberTextfield from '../../02_atoms/Widgets/NumberTextfield';
import StringTextfield from '../../02_atoms/Widgets/StringTextfield';
import TimestampDatetime from '../../02_atoms/Widgets/TimestampDatetime';
import FileUploadWidget from '../../02_atoms/Widgets/FileUploadWidget';

// @todo How do we do extensibility from modules, maybe a build step?
const widgets = {
  number_textfield: NumberTextfield,
  string_textfield: StringTextfield,
  timestamp_datetime: TimestampDatetime,
  image_image: FileUploadWidget,
};

export default widgets;