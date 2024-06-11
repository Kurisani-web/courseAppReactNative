import {Dimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';

const {width} = Dimensions.get('window');

function ConvertHTMLToText({data}) {
  return <RenderHTML contentWidth={width} source={{html: data}} />;
}

export default ConvertHTMLToText;
