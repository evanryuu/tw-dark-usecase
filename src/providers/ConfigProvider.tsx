import React, { createContext, useContext, ReactNode, ReactElement, CSSProperties } from 'react'

// 创建一个上下文来保存主题信息
const ThemeContext = createContext<{ tokens: { [key: string]: string } } | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ConfigProvider')
  }
  return context
}

const applyTheme = (children: ReactNode, theme?: { tokens: { [key: string]: string } }): ReactNode => {
  if (!React.isValidElement(children)) {
    return children
  }

  const style: CSSProperties = theme ? { ...theme.tokens } : {}

  return React.cloneElement(children, {
    ...children.props,
    style: { ...children.props.style, ...style },
    // children: React.Children.map(children.props.children, (child) => applyTheme(child, theme)),
  })
}

export const ConfigProvider = ({
  theme,
  children,
}: {
  theme?: { tokens: { [k: string]: string } }
  children: ReactNode
}) => {
  return <ThemeContext.Provider value={theme}>{applyTheme(children, theme)}</ThemeContext.Provider>
}

// export const ConfigProvider = ({theme, children}: {
//   children: React.ReactNode
//   theme: {
//     tokens: {
//       [k: string]: string
//     }
//   }
// }) => {

// }
