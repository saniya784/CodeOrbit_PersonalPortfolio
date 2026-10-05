import { FiDownload, FiExternalLink } from 'react-icons/fi';

const VARIANTS = {
  primary:
    'bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-purple ' +
    'text-white shadow-glow hover:shadow-glow-lg ' +
    'bg-[length:200%_auto] hover:bg-[position:100%_50%] transition-[background-position,box-shadow] duration-500',
  outline:
    'border border-slate-300 dark:border-navy-600 ' +
    'text-slate-800 dark:text-slate-100 ' +
    'hover:border-accent-blue/70 hover:text-accent-blue dark:hover:text-accent-blue ' +
    'hover:bg-accent-blue/5',
  ghost:
    'text-slate-700 dark:text-slate-200 ' +
    'hover:bg-slate-100 dark:hover:bg-navy-800',
  subtle:
    'bg-slate-100 dark:bg-navy-800 ' +
    'text-slate-800 dark:text-slate-100 ' +
    'hover:bg-slate-200 dark:hover:bg-navy-700',
};

export default function Button({
  as = 'button',
  href,
  variant = 'primary',
  children,
  icon,
  download,
  className = '',
  ...rest
}) {
  const Comp = as === 'a' ? 'a' : 'button';
  return (
    <Comp
      href={href}
      download={download}
      className={`btn-base ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {icon === 'download' && <FiDownload className="h-4 w-4" />}
      {icon === 'external' && <FiExternalLink className="h-4 w-4" />}
      {children}
    </Comp>
  );
}