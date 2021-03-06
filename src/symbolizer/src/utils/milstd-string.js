export default {
  create: (symbolId, dimensionChar, affilChar, statusChar, schemeChar) => {
    return schemeChar + affilChar + dimensionChar + statusChar + symbolId;
  },
  parse: (milstdString) => {
    return {
      scheme: milstdString.charAt(0),
      affiliation: milstdString.charAt(1),
      dimension: milstdString.charAt(2),
      status: milstdString.charAt(3),
      symbolId: milstdString.substring(4, 10),
      modifier: milstdString.substring(10, 12),
      country: milstdString.substring(12, 14),
      order: milstdString.charAt(14)
    };
  }
};
