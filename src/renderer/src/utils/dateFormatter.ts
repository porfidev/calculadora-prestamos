const dateFormatter = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses comienzan desde 0
  const day = String(date.getDate()).padStart(2, '0');

  return `${day}-${month}-${year}`;
};

export default dateFormatter;
