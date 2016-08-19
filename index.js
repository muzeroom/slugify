'use strict';
var slug = require('mollusc');

var charmap = {
  // custom
  '/': '-', '.': '',
  // latin
  'À': 'À', 'Á': 'Á', 'Â': 'Â', 'Ã': 'Ã', 'Ä': 'Ä', 'Å': 'Å', 'Æ': 'Æ',
  'Ç': 'Ç', 'È': 'È', 'É': 'É', 'Ê': 'Ê', 'Ë': 'Ë', 'Ì': 'Ì', 'Í': 'Í',
  'Î': 'Î', 'Ï': 'Ï', 'Ð': 'Ð', 'Ñ': 'Ñ', 'Ò': 'Ò', 'Ó': 'Ó', 'Ô': 'Ô',
  'Õ': 'Õ', 'Ö': 'Ö', 'Ő': 'Ő', 'Ø': 'Ø', 'Ù': 'Ù', 'Ú': 'Ú', 'Û': 'Û',
  'Ü': 'Ü', 'Ű': 'Ű', 'Ý': 'Ý', 'Þ': 'Þ', 'ß': 'ß', 'à':'à', 'á':'á',
  'â': 'â', 'ã': 'ã', 'ä': 'ä', 'å': 'å', 'æ': 'æ', 'ç': 'ç', 'è': 'è',
  'é': 'é', 'ê': 'ê', 'ë': 'ë', 'ì': 'ì', 'í': 'í', 'î': 'î', 'ï': 'ï',
  'ð': 'ð', 'ñ': 'ñ', 'ò': 'ò', 'ó': 'ó', 'ô': 'ô', 'õ': 'õ', 'ö': 'ö',
  'ő': 'ő', 'ø': 'ø', 'ù': 'ù', 'ú': 'ú', 'û': 'û', 'ü': 'ü', 'ű': 'ű',
  'ý': 'ý', 'þ': 'þ', 'ÿ': 'ÿ', 'ẞ': 'ẞ',
  // greek
  'α':'α', 'β':'β', 'γ':'γ', 'δ':'δ', 'ε':'ε', 'ζ':'ζ', 'η':'η', 'θ':'θ',
  'ι':'ι', 'κ':'κ', 'λ':'λ', 'μ':'μ', 'ν':'ν', 'ξ':'ξ', 'ο':'ο', 'π':'π',
  'ρ':'ρ', 'σ':'σ', 'τ':'τ', 'υ':'υ', 'φ':'φ', 'χ':'χ', 'ψ':'ψ', 'ω':'ω',
  'ά':'ά', 'έ':'έ', 'ί':'ί', 'ό':'ό', 'ύ':'ύ', 'ή':'ή', 'ώ':'ώ', 'ς':'ς',
  'ϊ':'ϊ', 'ΰ':'ΰ', 'ϋ':'ϋ', 'ΐ':'ΐ',
  'Α':'Α', 'Β':'Β', 'Γ':'Γ', 'Δ':'Δ', 'Ε':'Ε', 'Ζ':'Ζ', 'Η':'Η', 'Θ':'Θ',
  'Ι':'Ι', 'Κ':'Κ', 'Λ':'Λ', 'Μ':'Μ', 'Ν':'Ν', 'Ξ':'Ξ', 'Ο':'Ο', 'Π':'Π',
  'Ρ':'Ρ', 'Σ':'Σ', 'Τ':'Τ', 'Υ':'Υ', 'Φ':'Φ', 'Χ':'Χ', 'Ψ':'Ψ', 'Ω':'Ω',
  'Ά':'Ά', 'Έ':'Έ', 'Ί':'Ί', 'Ό':'Ό', 'Ύ':'Ύ', 'Ή':'Ή', 'Ώ':'Ώ', 'Ϊ':'Ϊ',
  'Ϋ':'Ϋ',
  // turkish
  'ş':'ş', 'Ş':'Ş', 'ı':'ı', 'İ':'İ',
  'ğ':'ğ', 'Ğ':'Ğ',
  // russian
  'а':'а', 'б':'б', 'в':'в', 'г':'г', 'д':'д', 'е':'е', 'ё':'ё', 'ж':'ж',
  'з':'з', 'и':'и', 'й':'й', 'к':'к', 'л':'л', 'м':'м', 'н':'н', 'о':'о',
  'п':'п', 'р':'р', 'с':'с', 'т':'т', 'у':'у', 'ф':'ф', 'х':'х', 'ц':'ц',
  'ч':'ч', 'ш':'ш', 'щ':'щ', 'ъ':'ъ', 'ы':'ы', 'ь':'ь', 'э':'э', 'ю':'ю',
  'я':'я',
  'А':'А', 'Б':'Б', 'В':'В', 'Г':'Г', 'Д':'Д', 'Е':'Е', 'Ё':'Ё', 'Ж':'Ж',
  'З':'З', 'И':'И', 'Й':'Й', 'К':'К', 'Л':'Л', 'М':'М', 'Н':'Н', 'О':'О',
  'П':'П', 'Р':'Р', 'С':'С', 'Т':'Т', 'У':'У', 'Ф':'Ф', 'Х':'Х', 'Ц':'Ц',
  'Ч':'Ч', 'Ш':'Ш', 'Щ':'Щ', 'Ъ':'Ъ', 'Ы':'Ы', 'Ь':'Ь', 'Э':'Э', 'Ю':'Ю',
  'Я':'Я',
  // ukranian
  'Є':'Є', 'І':'І', 'Ї':'Ї', 'Ґ':'Ґ', 'є':'є', 'і':'і', 'ї':'ї', 'ґ':'ґ',
  // czech
  'č':'č', 'ď':'ď', 'ě':'ě', 'ň': 'ň', 'ř':'ř', 'š':'š', 'ť':'ť', 'ů':'ů',
  'ž':'ž', 'Č':'Č', 'Ď':'Ď', 'Ě':'Ě', 'Ň': 'Ň', 'Ř':'Ř', 'Š':'Š', 'Ť':'Ť',
  'Ů':'Ů', 'Ž':'Ž',
  // polish
  'ą':'ą', 'ć':'ć', 'ę':'ę', 'ł':'ł', 'ń':'ń', 'ś':'ś', 'ź':'ź',
  'ż':'ż', 'Ą':'Ą', 'Ć':'Ć', 'Ę':'Ę', 'Ł':'Ł', 'Ń':'Ń', 'Ś':'Ś',
  'Ź':'Ź', 'Ż':'Ż',
  // latvian
  'ā':'ā', 'ē':'ē', 'ģ':'ģ', 'ī':'ī', 'ķ':'ķ', 'ļ':'ļ', 'ņ':'ņ',
  'ū':'ū', 'Ā':'Ā', 'Ē':'Ē', 'Ģ':'Ģ', 'Ī':'Ī',
  'Ķ':'Ķ', 'Ļ':'Ļ', 'Ņ':'Ņ', 'Ū':'Ū',
  // lithuanian
  'ė':'ė', 'į':'į', 'ų':'ų', 'Ė': 'Ė', 'Į': 'Į', 'Ų':'Ų',
  // romanian
  'ț':'ț', 'Ț':'Ț', 'ţ':'ţ', 'Ţ':'Ţ', 'ș':'ș', 'Ș':'Ș', 'ă':'ă', 'Ă':'Ă',
  // vietnamese
  'Ạ': 'Ạ', 'Ả': 'Ả', 'Ầ': 'Ầ', 'Ấ': 'Ấ', 'Ậ': 'Ậ', 'Ẩ': 'Ẩ', 'Ẫ': 'Ẫ',
  'Ằ': 'Ằ', 'Ắ': 'Ắ', 'Ặ': 'Ặ', 'Ẳ': 'Ẳ', 'Ẵ': 'Ẵ', 'Ẹ': 'Ẹ', 'Ẻ': 'Ẻ',
  'Ẽ': 'Ẽ', 'Ề': 'Ề', 'Ế': 'Ế', 'Ệ': 'Ệ', 'Ể': 'Ể', 'Ễ': 'Ễ', 'Ị': 'Ị',
  'Ỉ': 'Ỉ', 'Ĩ': 'Ĩ', 'Ọ': 'Ọ', 'Ỏ': 'Ỏ', 'Ồ': 'Ồ', 'Ố': 'Ố', 'Ộ': 'Ộ',
  'Ổ': 'Ổ', 'Ỗ': 'Ỗ', 'Ơ': 'Ơ', 'Ờ': 'Ờ', 'Ớ': 'Ớ', 'Ợ': 'Ợ', 'Ở': 'Ở',
  'Ỡ': 'Ỡ', 'Ụ': 'Ụ', 'Ủ': 'Ủ', 'Ũ': 'Ũ', 'Ư': 'Ư', 'Ừ': 'Ừ', 'Ứ': 'Ứ',
  'Ự': 'Ự', 'Ử': 'Ử', 'Ữ': 'Ữ', 'Ỳ': 'Ỳ', 'Ỵ': 'Ỵ', 'Ỷ': 'Ỷ', 'Ỹ': 'Ỹ',
  'Đ': 'Đ', 'ạ': 'ạ', 'ả': 'ả', 'ầ': 'ầ', 'ấ': 'ấ', 'ậ': 'ậ', 'ẩ': 'ẩ',
  'ẫ': 'ẫ', 'ằ': 'ằ', 'ắ': 'ắ', 'ặ': 'ặ', 'ẳ': 'ẳ', 'ẵ': 'ẵ', 'ẹ': 'ẹ',
  'ẻ': 'ẻ', 'ẽ': 'ẽ', 'ề': 'ề', 'ế': 'ế', 'ệ': 'ệ', 'ể': 'ể', 'ễ': 'ễ',
  'ị': 'ị', 'ỉ': 'ỉ', 'ĩ': 'ĩ', 'ọ': 'ọ', 'ỏ': 'ỏ', 'ồ': 'ồ', 'ố': 'ố',
  'ộ': 'ộ', 'ổ': 'ổ', 'ỗ': 'ỗ', 'ơ': 'ơ', 'ờ': 'ờ', 'ớ': 'ớ', 'ợ': 'ợ',
  'ở': 'ở', 'ỡ': 'ỡ', 'ụ': 'ụ', 'ủ': 'ủ', 'ũ': 'ũ', 'ư': 'ư', 'ừ': 'ừ',
  'ứ': 'ứ', 'ự': 'ự', 'ử': 'ử', 'ữ': 'ữ', 'ỳ': 'ỳ', 'ỵ': 'ỵ', 'ỷ': 'ỷ',
  'ỹ': 'ỹ', 'đ': 'đ',
  // currency
  '€': '€', '₢': '₢', '₣': '₣', '£': '£',
  '₤': '₤', '₥': '₥', '₦': '₦', '₧': '₧', '₨': '₨',
  '₩': '₩', '₪': '₪', '₫': '₫', '₭': '₭', '₮': '₮',
  '₯': '₯', '₰': '₰', '₱': '₱', '₲': '₲', '₳': '₳',
  '₴': '₴', '₵': '₵', '¢': '¢', '¥': '¥', '元': '元',
  '円': '円', '﷼': '﷼', '₠': '₠', '¤': '¤', '฿': '฿',
  '$': '$', '₹': '₹',
  // symbols
  '©':'©', 'œ': 'œ', 'Œ': 'Œ', '∑': '∑', '®': '®', '†': '†',
  '“': '"', '”': '"', '‘': '‘', '’': '’', '∂': '∂', 'ƒ': 'ƒ', '™': 'tm',
  '℠': 'sm', '…': '...', '˚': 'o', 'º': 'o', 'ª': 'a', '•': '*',
  '∆': 'delta', '∞': 'infinity', '♥': 'love', '&': 'and', '|': 'or',
  '<': 'less', '>': 'greater',
};


module.exports = function(val) {
  return slug(val, {lower: true, charmap: charmap}) || val;
};
