import {apiConfig} from "../config";
import Util from '../../libs/util';

export default {
  getGoodsLists(){
    return Util.ajax.get(apiConfig.goods.getGoodsLists());
  }
}
