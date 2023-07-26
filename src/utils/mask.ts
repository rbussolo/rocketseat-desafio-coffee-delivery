export function maskCEP(value: string | undefined) {
  if (!value) return '';

  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{8})\d*/g, "$1");
  value = value.replace(/^(\d{5})(\d+)/, "$1-$2");

  return value;
}
    
    